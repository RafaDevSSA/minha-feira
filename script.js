// Configuração do Firebase - SUBSTITUA PELOS SEUS DADOS
const firebaseConfig = {
    apiKey: "AIzaSyCRH-aApTh2ZKUsyhzBUvtK3MnxFDvEfEA",
    authDomain: "dlaw-manager.firebaseapp.com",
    databaseURL: "https://dlaw-manager.firebaseio.com",
    projectId: "dlaw-manager",
    storageBucket: "dlaw-manager.firebasestorage.app",
    messagingSenderId: "510108987774",
    appId: "1:510108987774:web:b00cb80a0aa63f74"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Estado da aplicação
let items = [];

// Elementos DOM
const addItemForm = document.getElementById('addItemForm');
const shoppingList = document.getElementById('shoppingList');
const totalItemsEl = document.getElementById('totalItems');
const completedItemsEl = document.getElementById('completedItems');
const pendingItemsEl = document.getElementById('pendingItems');
const notification = document.getElementById('notification');

// Função para mostrar notificação
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Função para adicionar item
async function addItem(name, category, quantity) {
    try {
        let item = {
            name: name,
            category: category,
            quantity: quantity,
            completed: false,
            createdAt: Date.now()
        }
        await db.collection("shoppingItems").add(item);
        showNotification('Item adicionado com sucesso!');
        addItemForm.reset();
        document.getElementById('itemQuantity').value = 1;
    } catch (e) {
        showNotification('Erro ao adicionar item: ' + e.message, 'error');
    }
}

// Função para atualizar quantidade
function updateQuantity(itemId, newQuantity) {
    db.collection("shoppingItems").doc(itemId).update({ quantity: newQuantity }).then(() => {
        showNotification('Quantidade atualizada!');
    }).catch((error) => {
        showNotification('Erro ao atualizar quantidade: ' + error.message, 'error');
    });
}

// Função para marcar como comprado
function toggleCompleted(itemId) {
    const item = items[itemId];
    db.collection("shoppingItems").doc(itemId).update({ completed: !item.completed }).then(() => {
        showNotification(item.completed ? 'Item desmarcado!' : 'Item marcado como comprado!');
    }).catch((error) => {
        showNotification('Erro ao atualizar item: ' + error.message, 'error');
    });
}

// Função para renderizar lista
function renderShoppingList() {

    if (Object.keys(items).length === 0) {
        shoppingList.innerHTML = `
                    <div class="empty-state">
                        <h3>📝 Lista vazia</h3>
                        <p>Adicione itens à sua lista de compras para começar!</p>
                    </div>
                `;
        return;
    }

    const itemsArray = Object.entries(items).sort((a, b) => {
        if (a[1].completed !== b[1].completed) {
            return a[1].completed ? 1 : -1;
        }
        return a[1].createdAt - b[1].createdAt;
    });

    shoppingList.innerHTML = itemsArray.map(([id, item]) => `
                <div class="list-item ${item.completed ? 'completed' : ''}">
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-category">${item.category}</span>
                    </div>
                    <div class="item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" onclick="updateQuantity('${id}', ${item.quantity - 1})">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn plus" onclick="updateQuantity('${id}', ${item.quantity + 1})">+</button>
                        </div>
                        <div class="item-actions">
                            <button class="btn btn-secondary" onclick="toggleCompleted('${id}')">
                                ${item.completed ? '↩ Desmarcar' : '✓ Comprado'}
                            </button>
                            <button class="btn btn-danger" onclick="removeItem('${id}')">🗑 Remover</button>
                        </div>
                    </div>
                </div>
            `).join('');
}

// Função para atualizar estatísticas
function updateStats() {
    const itemsArray = Object.values(items);
    const total = itemsArray.length;
    const completed = itemsArray.filter(item => item.completed).length;
    const pending = total - completed;

    totalItemsEl.textContent = total;
    completedItemsEl.textContent = completed;
    pendingItemsEl.textContent = pending;
}

// Event listeners
addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('itemName').value.trim();
    const category = document.getElementById('itemCategory').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);

    if (name) {
        addItem(name, category, quantity);
    }
});

// Tornar funções globais
window.updateQuantity = updateQuantity;
window.toggleCompleted = toggleCompleted;
window.removeItem = removeItem;

// Escutar mudanças em tempo real
const listenForChanges = () => {
    const unsubscribe = db.collection("shoppingItems")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                items[doc.id] = doc.data();
            });
            renderShoppingList();
            updateStats();
            console.log("Mudanças detectadas:");
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("Novo: ", change.doc.data());
                }
                if (change.type === "modified") {
                    console.log("Modificado: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removido: ", change.doc.data());
                }
            });

        });

    // Para parar de escutar: unsubscribe();
    return unsubscribe;
};

async function loadRegisters() {
    try {
        items = [];
        let query = db.collection('shoppingItems');
        const querySnapshot = await query.get();
        querySnapshot.forEach(doc => {
            items[doc.id] = doc.data();
        });
        renderShoppingList();
        updateStats();
    } catch (error) {
        showNotification('Erro ao carregar item: ' + e.message, 'error');
    }
}

// Deletar documento
async function removeItem(id) {
    try {
        await db.collection("shoppingItems").doc(id).delete();
        loadRegisters();
        showNotification('Item removido com sucesso!');
    } catch (e) {
        showNotification('Erro ao deletar item: ' + e.message, 'error');
    }
};

// Inicialização
listenForChanges();
showNotification('Conectado ao Firebase!');