# 🛒 Lista de Compras Inteligente

<div align="center">
  <img src="https://raw.githubusercontent.com/seu-usuario/lista-compras-firebase/main/assets/banner.png" alt="Banner Lista de Compras" width="100%">
  
  <p align="center">
    <strong>Uma aplicação web moderna e responsiva para gerenciar sua lista de compras</strong>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  </p>
  
  <p align="center">
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-instalação">Instalação</a> •
    <a href="#-uso">Uso</a> •
    <a href="#-contribuição">Contribuição</a>
  </p>
</div>

## 📸 Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/seu-usuario/lista-compras-firebase/main/assets/desktop-preview.png" alt="Versão Desktop" width="48%">
  <img src="https://raw.githubusercontent.com/seu-usuario/lista-compras-firebase/main/assets/mobile-preview.png" alt="Versão Mobile" width="48%">
</div>

## 📋 Sobre o Projeto

A **Lista de Compras Inteligente** é uma aplicação web moderna que permite gerenciar suas compras de mercado de forma prática e organizada. Com sincronização em tempo real via Firebase, você pode acessar sua lista de qualquer dispositivo.

### 🎯 Principais Benefícios

- ✅ **Sincronização em Tempo Real** - Acesse de qualquer dispositivo
- ✅ **Interface Responsiva** - Funciona perfeitamente em mobile e desktop
- ✅ **Organização por Categorias** - Agrupe itens por seções do mercado
- ✅ **Controle de Quantidade** - Incremente/decremente facilmente
- ✅ **Estatísticas Visuais** - Acompanhe seu progresso de compras

### 🌟 Demo ao Vivo

> **[🚀 Acesse a Demo](https://seu-usuario.github.io/lista-compras-firebase/)**

ou

> **[📱 Teste no seu dispositivo](https://seu-usuario.github.io/lista-compras-firebase/)**

## 🚀 Funcionalidades

### 📝 Gerenciamento de Itens
- **Adicionar novos itens** com nome, categoria e quantidade
- **Editar quantidade** usando botões + e -
- **Marcar como comprado** para controle de progresso
- **Remover itens** desnecessários da lista

### 🏷️ Categorização Inteligente
- **9 categorias pré-definidas**: Laticínios, Carnes, Frutas, Verduras, Padaria, Limpeza, Higiene, Bebidas, Outros
- **Organização visual** por cores e tags
- **Filtros por categoria** (futuras implementações)

### 📊 Dashboard de Estatísticas
- **Total de itens** na lista
- **Itens comprados** vs pendentes
- **Progresso visual** em tempo real

### 🔄 Sincronização Firebase
- **Dados persistentes** na nuvem
- **Atualizações automáticas** entre dispositivos
- **Backup automático** de todas as informações

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica da aplicação
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript ES6+** - Lógica da aplicação e manipulação DOM
- **CSS Grid & Flexbox** - Layout responsivo

### Backend & Database
- **Firebase Realtime Database** - Banco de dados NoSQL em tempo real
- **Firebase SDK 9.23.0** - Integração com serviços Firebase

### Design & UX
- **Design Responsivo** - Mobile-first approach
- **Gradientes CSS** - Interface moderna e atrativa
- **Animações suaves** - Transições e hover effects
- **Notificações toast** - Feedback visual para o usuário

## 📦 Instalação

### Pré-requisitos
- Conta no [Firebase Console](https://console.firebase.google.com/)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/lista-compras-firebase.git
   cd lista-compras-firebase
   ```

2. **Configure o Firebase**
   - Acesse o [Firebase Console](https://console.firebase.google.com/)
   - Crie um novo projeto
   - Ative o **Realtime Database**
   - Configure as regras de segurança:
     ```json
     {
       "rules": {
         ".read": true,
         ".write": true
       }
     }
     ```

3. **Obtenha as credenciais**
   - Vá em **Configurações do Projeto** > **Geral**
   - Clique em **Adicionar app** > **Web**
   - Copie o objeto `firebaseConfig`

4. **Configure as credenciais no código**
   ```javascript
   // Substitua na linha 264 do arquivo index.html
   const firebaseConfig = {
     apiKey: "sua-api-key",
     authDomain: "seu-projeto.firebaseapp.com",
     databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
     projectId: "seu-projeto",
     storageBucket: "seu-projeto.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123def456"
   };
   ```

5. **Execute a aplicação**
   ```bash
   # Usando um servidor local (Python)
   python -m http.server 8000
   
   # Ou usando Node.js
   npx http-server
   
   # Ou usando Live Server no VS Code
   # Instale a extensão Live Server e clique em "Go Live"
   ```

   Acesse: `http://localhost:8000`

### 🚀 Deploy no GitHub Pages

1. **Faça o push do código**
   ```bash
   git add .
   git commit -m "feat: adiciona lista de compras com Firebase"
   git push origin main
   ```

2. **Ative o GitHub Pages**
   - Vá em **Settings** > **Pages**
   - Selecione **Deploy from a branch**
   - Escolha **main** branch e **/ (root)**
   - Clique em **Save**

3. **Acesse sua aplicação**
   - URL: `https://seu-usuario.github.io/lista-compras-firebase/`

## 📁 Estrutura do Projeto

```
lista-compras-firebase/
├── 📄 index.html          # Arquivo principal da aplicação
├── 📄 README.md           # Documentação do projeto
├── 📄 LICENSE             # Licença MIT
├── 📁 assets/             # Recursos estáticos
│   ├── 🖼️ banner.png       # Banner do README
│   ├── 🖼️ desktop-preview.png # Screenshot desktop
│   ├── 🖼️ mobile-preview.png  # Screenshot mobile
│   └── 🖼️ logo.png        # Logo da aplicação
└── 📁 docs/               # Documentação adicional
    ├── 📄 SETUP.md        # Guia de configuração
    └── 📄 CONTRIBUTING.md # Guia de contribuição
```

## 🎮 Como Usar

### 1. **Adicionar Itens**
- Preencha o nome do item
- Selecione a categoria apropriada
- Defina a quantidade desejada
- Clique em "Adicionar Item"

### 2. **Gerenciar Quantidades**
- Use os botões **-** e **+** para ajustar quantidades
- A quantidade mínima é 1 (remover automaticamente com 0)

### 3. **Marcar como Comprado**
- Clique no botão **"✓ Comprado"** para marcar itens
- Itens comprados ficam com aparência diferenciada
- Use **"↩ Desmarcar"** para desfazer

### 4. **Acompanhar Progresso**
- Visualize estatísticas em tempo real no dashboard
- Acompanhe total de itens, comprados e pendentes

## 📱 Responsividade

A aplicação foi desenvolvida com **Mobile-First**, garantindo:

- 📱 **Mobile** (até 768px) - Layout otimizado para telas pequenas
- 💻 **Tablet** (768px - 1024px) - Interface adaptada para telas médias
- 🖥️ **Desktop** (1024px+) - Experiência completa em telas grandes

## 🔮 Próximas Funcionalidades

- [ ] **Autenticação de usuários** com Firebase Auth
- [ ] **Compartilhamento de listas** entre usuários
- [ ] **Histórico de compras** anteriores
- [ ] **Calculadora de preços** com orçamento
- [ ] **Lista de favoritos** para itens frequentes
- [ ] **Notificações push** para lembretes
- [ ] **Modo offline** com sincronização posterior
- [ ] **Filtros e busca** avançada
- [ ] **Temas personalizáveis** (claro/escuro)
- [ ] **Exportação** para PDF/Excel

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga estes passos:

### 📋 Como Contribuir

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit** suas mudanças
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. **Push** para a branch
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra** um Pull Request

### 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/lista-compras-firebase/issues) com:

- **Título claro** descrevendo o problema
- **Descrição detalhada** do que aconteceu
- **Passos para reproduzir** o erro
- **Screenshots** (se aplicável)
- **Informações do ambiente** (navegador, versão, etc.)

### 💡 Sugerir Melhorias

Tem uma ideia? Abra uma [issue](https://github.com/seu-usuario/lista-compras-firebase/issues) com:

- **Label**: `enhancement`
- **Descrição** da funcionalidade
- **Justificativa** de por que seria útil
- **Mockups** ou exemplos (se aplicável)

### 🎯 Boas Práticas

- Use **commits semânticos** (feat, fix, docs, style, refactor, test, chore)
- Mantenha o **código limpo** e bem documentado
- Teste suas mudanças antes de enviar
- Siga o **padrão de código** existente
- Atualize a documentação quando necessário

### 🏆 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/seu-usuario">
        <img src="https://github.com/seu-usuario.png" width="100px;" alt="Seu Nome"/>
        <br />
        <sub><b>Seu Nome</b></sub>
      </a>
      <br />
      <a href="https://github.com/seu-usuario/lista-compras-firebase/commits?author=seu-usuario" title="Código">💻</a>
      <a href="#design-seu-usuario" title="Design">🎨</a>
      <a href="https://github.com/seu-usuario/lista-compras-firebase/commits?author=seu-usuario" title="Documentação">📖</a>
    </td>
  </tr>
</table>

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 Seu Nome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Autor

<div align="center">
  <a href="https://github.com/seu-usuario">
    <img src="https://github.com/seu-usuario.png" width="100px;" alt="Foto do Autor"/>
    <br />
    <sub><b>Seu Nome</b></sub>
  </a>
  <br />
  <br />
  <a href="https://github.com/seu-usuario" title="GitHub">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://linkedin.com/in/seu-perfil" title="LinkedIn">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a href="mailto:seu-email@gmail.com" title="Email">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
  </a>
</div>

---

<div align="center">
  <p>⭐ Se este projeto foi útil, considere dar uma estrela!</p>
  <p>🚀 Desenvolvido com ❤️ usando HTML, CSS, JavaScript e Firebase</p>
  <p>📱 Testado em Chrome, Firefox, Safari e Edge</p>
  
  <br>
  
  <img src="https://img.shields.io/github/stars/seu-usuario/lista-compras-firebase?style=social">
  <img src="https://img.shields.io/github/forks/seu-usuario/lista-compras-firebase?style=social">
  <img src="https://img.shields.io/github/issues/seu-usuario/lista-compras-firebase">
  <img src="https://img.shields.io/github/license/seu-usuario/lista-compras-firebase">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</div>

## 📚 Documentação Adicional

- [📋 Guia de Configuração](docs/SETUP.md)
- [🤝 Guia de Contribuição](docs/CONTRIBUTING.md)
- [🔧 API do Firebase](https://firebase.google.com/docs/database/web/start)
- [📱 Design System](https://www.figma.com/seu-design-system)

## 🌟 Agradecimentos

- [Firebase](https://firebase.google.com/) pela infraestrutura
- [GitHub Pages](https://pages.github.com/) pelo hosting gratuito
- [Shields.io](https://shields.io/) pelos badges informativos
- [Lucide Icons](https://lucide.dev/) pelos ícones utilizados
- Comunidade open-source pela inspiração

---

<div align="center">
  <p><strong>🛒 Lista de Compras Inteligente</strong></p>
  <p>Versão 1.0.0 • Última atualização: Janeiro 2025</p>
</div>
