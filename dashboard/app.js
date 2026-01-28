// API Configuration
const API_BASE = 'http://localhost:3000/api';

// State
let reminders = [];
let messages = [];
let stats = {
    totalReminders: 0,
    totalMessages: 0
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadReminders();
    loadMessages();
    updateStats();

    // Auto-refresh every 30 seconds
    setInterval(() => {
        loadReminders();
        loadMessages();
    }, 30000);
});

// Modal Functions
function openReminderModal() {
    document.getElementById('reminder-modal').classList.add('active');
}

function openMessageModal() {
    document.getElementById('message-modal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function toggleCustomTime() {
    const select = document.getElementById('reminder-time-type');
    const customGroup = document.getElementById('custom-time-group');
    customGroup.style.display = select.value === 'custom' ? 'block' : 'none';
}

// Create Reminder
async function createReminder(event) {
    event.preventDefault();

    const text = document.getElementById('reminder-text').value;
    const timeType = document.getElementById('reminder-time-type').value;
    const customTime = document.getElementById('custom-time').value;

    let when;
    switch (timeType) {
        case '15min': when = 'in 15 minutes'; break;
        case '30min': when = 'in 30 minutes'; break;
        case '1hour': when = 'in 1 hour'; break;
        case '2hours': when = 'in 2 hours'; break;
        case 'custom': when = customTime; break;
    }

    try {
        const response = await fetch(`${API_BASE}/reminders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, when })
        });

        if (response.ok) {
            showNotification('✅ Lembrete criado com sucesso!', 'success');
            closeModal('reminder-modal');
            document.getElementById('reminder-form').reset();
            loadReminders();
            stats.totalReminders++;
            updateStats();
        } else {
            throw new Error('Falha ao criar lembrete');
        }
    } catch (error) {
        showNotification('❌ Erro ao criar lembrete', 'error');
        console.error(error);
    }
}

// Send Message
async function sendMessage(event) {
    event.preventDefault();

    const to = document.getElementById('message-to').value;
    const text = document.getElementById('message-text').value;

    try {
        const response = await fetch(`${API_BASE}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to, message: text })
        });

        if (response.ok) {
            showNotification('✅ Mensagem enviada!', 'success');
            closeModal('message-modal');
            document.getElementById('message-form').reset();
            loadMessages();
            stats.totalMessages++;
            updateStats();
        } else {
            throw new Error('Falha ao enviar mensagem');
        }
    } catch (error) {
        showNotification('❌ Erro ao enviar mensagem', 'error');
        console.error(error);
    }
}

// Load Reminders
async function loadReminders() {
    try {
        const response = await fetch(`${API_BASE}/reminders`);
        if (response.ok) {
            reminders = await response.json();
            renderReminders();
            document.getElementById('reminders-count').textContent = `${reminders.length} agendados`;
        }
    } catch (error) {
        console.error('Erro ao carregar lembretes:', error);
        // Fallback to mock data for demo
        renderMockReminders();
    }
}

function renderReminders() {
    const container = document.getElementById('reminders-list');

    if (reminders.length === 0) {
        container.innerHTML = '<div class="empty-state">Nenhum lembrete agendado</div>';
        return;
    }

    container.innerHTML = reminders.map(reminder => `
        <div class="reminder-item">
            <div class="reminder-text">🔔 ${reminder.text}</div>
            <div class="reminder-time">${formatTime(reminder.scheduledFor)}</div>
        </div>
    `).join('');
}

function renderMockReminders() {
    const container = document.getElementById('reminders-list');
    container.innerHTML = `
        <div class="reminder-item">
            <div class="reminder-text">🔔 Beber água</div>
            <div class="reminder-time">Daqui a 30 minutos</div>
        </div>
        <div class="reminder-item">
            <div class="reminder-text">🔔 Academia</div>
            <div class="reminder-time">Daqui a 2 horas</div>
        </div>
    `;
    document.getElementById('reminders-count').textContent = '2 agendados';
}

// Load Messages
async function loadMessages() {
    try {
        const response = await fetch(`${API_BASE}/messages`);
        if (response.ok) {
            messages = await response.json();
            renderMessages();
        }
    } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
        // Fallback to mock data
        renderMockMessages();
    }
}

function renderMessages() {
    const container = document.getElementById('messages-list');

    if (messages.length === 0) {
        container.innerHTML = '<div class="empty-state">Nenhuma mensagem ainda</div>';
        return;
    }

    container.innerHTML = messages.slice(0, 5).map(msg => `
        <div class="message-item">
            <div class="message-header">
                <span class="message-from">${msg.from}</span>
                <span class="message-time">${formatTime(msg.timestamp)}</span>
            </div>
            <div class="message-text">${msg.text}</div>
        </div>
    `).join('');
}

function renderMockMessages() {
    const container = document.getElementById('messages-list');
    container.innerHTML = `
        <div class="message-item">
            <div class="message-header">
                <span class="message-from">Você → Ana Carolina</span>
                <span class="message-time">há 5 minutos</span>
            </div>
            <div class="message-text">vc me ama?</div>
        </div>
        <div class="message-item">
            <div class="message-header">
                <span class="message-from">Sistema</span>
                <span class="message-time">há 10 minutos</span>
            </div>
            <div class="message-text">🔔 LEMBRETE: Teste funcionando!</div>
        </div>
    `;
}

// Update Stats
function updateStats() {
    document.getElementById('total-reminders').textContent = stats.totalReminders;
    document.getElementById('total-messages').textContent = stats.totalMessages;
}

// Refresh Status
async function refreshStatus() {
    showNotification('🔄 Atualizando...', 'info');
    await Promise.all([
        loadReminders(),
        loadMessages()
    ]);
    showNotification('✅ Atualizado!', 'success');
}

// Utility Functions
function formatTime(timestamp) {
    if (!timestamp) return 'Agora';
    const date = new Date(timestamp);
    const now = new Date();
    const diff = date - now;

    if (diff < 0) return 'Expirado';

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `Em ${days} dia${days > 1 ? 's' : ''}`;
    if (hours > 0) return `Em ${hours} hora${hours > 1 ? 's' : ''}`;
    if (minutes > 0) return `Em ${minutes} minuto${minutes > 1 ? 's' : ''}`;
    return 'Agora';
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Close modals on outside click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});
