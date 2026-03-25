const ADMIN_PASSWORD = 'bi.por72';
const DEFAULT_APPROVED_USER = {
  firstName:'Vitoria',
  name:'Vitoria',
  professionalRecord:'0000001',
  matricula:'0000001',
  email:'vitoria@faculdadececape.edu.br',
  institutionEmail:'contato@faculdadececape.edu.br',
  password:'Vi12345',
  status:'approved',
  releaseMode:'fast',
  canLoginAt:new Date().toISOString(),
  institution:'Faculdade CECAPE',
  registeredAt:new Date().toISOString()
};

const atlasData = [
  {title:'Esqueleto humano completo', image:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Skeleton_front.svg', text:'Visão geral do corpo humano com divisão entre esqueleto axial e apendicular.', bones:['206 ossos','Esqueleto axial','Esqueleto apendicular']},
  {title:'Crânio', image:'https://upload.wikimedia.org/wikipedia/commons/1/10/Human_skull_front_simplified.svg', text:'Protege o encéfalo e compõe a face.', bones:['Frontal','Parietais','Temporais','Occipital','Esfenoide','Etmoide','Maxilas','Zigomáticos','Nasais','Lacrimais','Palatinos','Cornetos nasais inferiores','Vômer','Mandíbula']},
  {title:'Coluna vertebral', image:'https://upload.wikimedia.org/wikipedia/commons/7/79/Gray_111_-_vertebral_column_colored.png', text:'Sustenta o corpo e protege a medula espinhal.', bones:['C1 Atlas','C2 Áxis','C3 a C7','T1 a T12','L1 a L5','Sacro','Cóccix']},
  {title:'Caixa torácica', image:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Illu_thorax.jpg', text:'Protege coração e pulmões.', bones:['Manúbrio','Corpo do esterno','Processo xifoide','Costelas verdadeiras','Costelas falsas','Costelas flutuantes']},
  {title:'Cintura escapular e braço', image:'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gray207.png', text:'Conecta o membro superior ao tronco.', bones:['Clavícula','Escápula','Úmero']},
  {title:'Antebraço e mão', image:'https://upload.wikimedia.org/wikipedia/commons/8/8f/HandBones.svg', text:'Movimentos finos e preensão.', bones:['Rádio','Ulna','Escafoide','Semilunar','Piramidal','Pisiforme','Trapézio','Trapezoide','Capitato','Hamato','Metacarpos I-V','Falanges proximais','Falanges médias','Falanges distais']},
  {title:'Pelve e coxa', image:'https://upload.wikimedia.org/wikipedia/commons/6/6d/Blausen_0693_Pelvis.png', text:'Base do tronco e início do membro inferior.', bones:['Ílio','Ísquio','Púbis','Fêmur','Patela']},
  {title:'Perna e pé', image:'https://upload.wikimedia.org/wikipedia/commons/9/98/Foot_bones_-_tarsus%2C_metatarsus_and_phalanges.png', text:'Equilíbrio e locomoção.', bones:['Tíbia','Fíbula','Tálus','Calcâneo','Navicular','Cuboide','Cuneiforme medial','Cuneiforme intermediário','Cuneiforme lateral','Metatarsos I-V','Falanges proximais','Falanges médias','Falanges distais']}
];

const systems = [
  {title:'Sistema esquelético', group:'Estrutural', tag:'Base do corpo', image:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Skeleton_front.svg', text:'Formado por ossos, cartilagens e articulações. Dá sustentação, proteção e participa do movimento.'},
  {title:'Sistema muscular', group:'Estrutural', tag:'Movimento', image:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Illu_muscle.jpg', text:'Conjunto de músculos responsáveis por movimento, postura e produção de calor.'},
  {title:'Sistema nervoso', group:'Controle', tag:'Coordenação', image:'https://upload.wikimedia.org/wikipedia/commons/3/30/Gray684.png', text:'Coordena funções do corpo por meio do encéfalo, medula espinhal e nervos.'},
  {title:'Sistema cardiovascular', group:'Funções vitais', tag:'Circulação', image:'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg', text:'Distribui sangue, oxigênio e nutrientes pelo corpo por meio do coração e vasos sanguíneos.'},
  {title:'Sistema respiratório', group:'Funções vitais', tag:'Respiração', image:'https://upload.wikimedia.org/wikipedia/commons/8/8f/Respiratory_system_complete_en.svg', text:'Responsável pelas trocas gasosas, levando oxigênio ao corpo e eliminando gás carbônico.'},
  {title:'Sistema digestório', group:'Funções vitais', tag:'Nutrição', image:'https://upload.wikimedia.org/wikipedia/commons/3/32/Digestive_system_diagram_pt.svg', text:'Faz digestão, absorção de nutrientes e eliminação de resíduos.'}
];

const topics = [
  {title:'Esqueleto axial', theme:'Esquelético', image:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Skeleton_front.svg', text:'Inclui crânio, coluna vertebral e caixa torácica.', exercise:'Cite as três partes principais do esqueleto axial.'},
  {title:'Esqueleto apendicular', theme:'Esquelético', image:'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gray207.png', text:'Inclui membros e cinturas.', exercise:'Explique a função do esqueleto apendicular.'},
  {title:'Crânio', theme:'Esquelético', image:'https://upload.wikimedia.org/wikipedia/commons/1/10/Human_skull_front_simplified.svg', text:'Protege o encéfalo e forma a face.', exercise:'Diferencie neurocrânio e viscerocrânio.'},
  {title:'Coluna vertebral', theme:'Esquelético', image:'https://upload.wikimedia.org/wikipedia/commons/7/79/Gray_111_-_vertebral_column_colored.png', text:'Regiões cervical, torácica, lombar, sacral e coccígea.', exercise:'Quantas vértebras existem em cada região principal?'},
  {title:'Sistema muscular', theme:'Muscular', image:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Illu_muscle.jpg', text:'Atua na contração e no movimento.', exercise:'Qual a função principal do tecido muscular?'},
  {title:'Sistema nervoso', theme:'Nervoso', image:'https://upload.wikimedia.org/wikipedia/commons/3/30/Gray684.png', text:'Integra e coordena respostas do corpo.', exercise:'Quais estruturas formam o sistema nervoso central?'},
  {title:'Sistema cardiovascular', theme:'Cardiovascular', image:'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg', text:'Transporta sangue e nutrientes.', exercise:'Qual a diferença entre artérias e veias?'},
  {title:'Sistema respiratório', theme:'Respiratório', image:'https://upload.wikimedia.org/wikipedia/commons/8/8f/Respiratory_system_complete_en.svg', text:'Realiza trocas gasosas.', exercise:'Explique o papel dos pulmões na hematose.'},
  {title:'Sistema digestório', theme:'Digestório', image:'https://upload.wikimedia.org/wikipedia/commons/3/32/Digestive_system_diagram_pt.svg', text:'Promove digestão e absorção.', exercise:'Qual a função principal do intestino delgado?'}
];

const flashcards = [
  {front:'Quantos ossos tem o corpo humano adulto?', back:'O corpo humano adulto tem, em média, 206 ossos.'},
  {front:'Quais partes formam o esqueleto axial?', back:'Crânio, coluna vertebral e caixa torácica.'},
  {front:'Qual é o maior osso do corpo humano?', back:'O fêmur.'},
  {front:'Qual é a vértebra chamada de Atlas?', back:'A primeira vértebra cervical, C1.'},
  {front:'Quais ossos formam a pelve?', back:'Ílio, ísquio e púbis.'},
  {front:'Qual a função do sistema cardiovascular?', back:'Transportar sangue, oxigênio e nutrientes pelo corpo.'},
  {front:'Qual sistema coordena o corpo?', back:'O sistema nervoso.'},
  {front:'Qual sistema realiza trocas gasosas?', back:'O sistema respiratório.'},
  {front:'Qual sistema faz digestão e absorção?', back:'O sistema digestório.'}
];

const questions = [
  {theme:'Esquelético', q:'Qual osso pertence ao neurocrânio?', img:'https://upload.wikimedia.org/wikipedia/commons/1/10/Human_skull_front_simplified.svg', options:['Fêmur','Frontal','Úmero','Tíbia'], answer:'Frontal'},
  {theme:'Esquelético', q:'Qual vértebra é conhecida como Atlas?', img:'https://upload.wikimedia.org/wikipedia/commons/7/79/Gray_111_-_vertebral_column_colored.png', options:['C1','C2','L1','T1'], answer:'C1'},
  {theme:'Esquelético', q:'Qual osso faz parte do antebraço?', img:'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gray207.png', options:['Escápula','Patela','Ulna','Costela'], answer:'Ulna'},
  {theme:'Esquelético', q:'Quantos pares de costelas existem normalmente?', img:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Illu_thorax.jpg', options:['8','10','12','14'], answer:'12'},
  {theme:'Esquelético', q:'Qual osso está na coxa?', img:'https://upload.wikimedia.org/wikipedia/commons/6/6d/Blausen_0693_Pelvis.png', options:['Fíbula','Fêmur','Rádio','Esterno'], answer:'Fêmur'},
  {theme:'Esquelético', q:'Qual desses é um osso do carpo?', img:'https://upload.wikimedia.org/wikipedia/commons/8/8f/HandBones.svg', options:['Calcâneo','Semilunar','Navicular','Patela'], answer:'Semilunar'},
  {theme:'Muscular', q:'Qual sistema é responsável pelos movimentos corporais?', img:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Illu_muscle.jpg', options:['Muscular','Digestório','Respiratório','Nervoso'], answer:'Muscular'},
  {theme:'Nervoso', q:'Qual sistema coordena as funções do corpo?', img:'https://upload.wikimedia.org/wikipedia/commons/3/30/Gray684.png', options:['Muscular','Esquelético','Nervoso','Digestório'], answer:'Nervoso'},
  {theme:'Cardiovascular', q:'Qual sistema é responsável pelo transporte de sangue?', img:'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg', options:['Digestório','Cardiovascular','Nervoso','Respiratório'], answer:'Cardiovascular'},
  {theme:'Respiratório', q:'Qual sistema realiza as trocas gasosas?', img:'https://upload.wikimedia.org/wikipedia/commons/8/8f/Respiratory_system_complete_en.svg', options:['Respiratório','Cardiovascular','Muscular','Esquelético'], answer:'Respiratório'},
  {theme:'Digestório', q:'Qual sistema atua na digestão dos alimentos?', img:'https://upload.wikimedia.org/wikipedia/commons/3/32/Digestive_system_diagram_pt.svg', options:['Digestório','Muscular','Nervoso','Esquelético'], answer:'Digestório'}
];

const matchPairs = [
  {name:'Crânio', desc:'Protege o encéfalo'},
  {name:'Coluna vertebral', desc:'Protege a medula espinhal'},
  {name:'Caixa torácica', desc:'Protege coração e pulmões'},
  {name:'Fêmur', desc:'Maior osso do corpo'},
  {name:'Sistema nervoso', desc:'Coordena funções corporais'},
  {name:'Sistema cardiovascular', desc:'Transporta sangue e nutrientes'}
];

const robotImages = [
  {label:'Coração', img:'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg'},
  {label:'Crânio', img:'https://upload.wikimedia.org/wikipedia/commons/1/10/Human_skull_front_simplified.svg'},
  {label:'Pulmões', img:'https://upload.wikimedia.org/wikipedia/commons/8/8f/Respiratory_system_complete_en.svg'},
  {label:'Mão', img:'https://upload.wikimedia.org/wikipedia/commons/8/8f/HandBones.svg'}
];

let currentUser = null;
let currentSystemGroup = 'Todos';
let currentMatches = [];
let simQuestions = [];
let simIndex = 0;
let simPoints = 0;
let simSeconds = 900;
let simTimer = null;
let simThemeCurrent = 'Todos';
let forgotVerifiedEmail = null;
let robotCorrectLabel = null;

function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function slug(text){ return text.toLowerCase().replace(/[^a-z0-9]+/g,'-'); }
function escapeQuotes(text){ return text.replace(/'/g, "\\'"); }
function institutionFromEmail(email){ return (email || '').toLowerCase().endsWith('@faculdadececape.edu.br') ? 'Faculdade CECAPE' : 'Instituição não identificada'; }
function translateStatus(s){ return s==='approved' ? 'Aprovado' : s==='pending' ? 'Pendente' : 'Recusado'; }
function byId(id){ return document.getElementById(id); }

function getUsers(){
  const saved = JSON.parse(localStorage.getItem('anatomia_users_v6') || 'null');
  if(saved && saved.length) return saved;
  const users = [DEFAULT_APPROVED_USER];
  localStorage.setItem('anatomia_users_v6', JSON.stringify(users));
  return users;
}
function saveUsers(users){ localStorage.setItem('anatomia_users_v6', JSON.stringify(users)); }
function getScores(){ return JSON.parse(localStorage.getItem('anatomia_scores_v6') || '[]'); }
function saveScores(scores){ localStorage.setItem('anatomia_scores_v6', JSON.stringify(scores)); }

function initializeLoginPremium(){
  const imagens = [
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Skeleton_front.svg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Illu_muscle.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/30/Gray684.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg'
  ];
  const el = byId('imgLogin');
  if(!el || el.dataset.ready === '1') return;
  el.dataset.ready = '1';
  let i = 0;
  el.src = imagens[0];
  setInterval(() => {
    i = (i + 1) % imagens.length;
    el.src = imagens[i];
  }, 2800);
}

function toggleCadastro(){ byId('cadastroCard').classList.toggle('hidden'); }
function toggleSidebar(){ const s = byId('sidebar'); if(s) s.classList.toggle('open'); }
function closeSidebarOnMobile(){ if(window.innerWidth <= 1024){ const s = byId('sidebar'); if(s) s.classList.remove('open'); } }

function showForgot(){ byId('forgotModal').classList.remove('hidden'); }
function hideForgot(){
  byId('forgotModal').classList.add('hidden');
  byId('forgotMsg').innerHTML='';
  byId('forgotVerifyMsg').innerHTML='';
  byId('forgotStep2').classList.add('hidden');
  byId('forgotStep3').classList.add('hidden');
  byId('forgotUser').value='';
  byId('newForgotPass').value='';
  forgotVerifiedEmail = null;
  robotCorrectLabel = null;
}

function showAdminLogin(){ byId('adminLoginModal').classList.remove('hidden'); }
function hideAdminLogin(){ byId('adminLoginModal').classList.add('hidden'); byId('adminMsg').innerHTML=''; }

function register(){
  const firstName = byId('regFirstName').value.trim();
  const name = byId('regName').value.trim();
  const matricula = byId('regMatricula').value.trim();
  const email = byId('regEmail').value.trim().toLowerCase();
  const institutionEmail = byId('regInstitutionEmail').value.trim().toLowerCase();
  const password = byId('regPass').value;

  if(!firstName || !name || !matricula || !email || !institutionEmail || !password){ byId('regMsg').innerHTML = '<div class="status-box bad">Preencha todos os campos do cadastro.</div>'; return; }
  if(matricula.length > 7){ byId('regMsg').innerHTML = '<div class="status-box bad">A matrícula deve ter até 7 caracteres.</div>'; return; }
  if(password.length !== 7){ byId('regMsg').innerHTML = '<div class="status-box bad">A senha deve ter exatamente 7 caracteres.</div>'; return; }
  if(!email.includes('@') || !institutionEmail.includes('@')){ byId('regMsg').innerHTML = '<div class="status-box bad">Digite corretamente o e-mail institucional e o e-mail da instituição.</div>'; return; }

  const users = getUsers();
  if(users.some(u => u.matricula === matricula || u.email === email)){ byId('regMsg').innerHTML = '<div class="status-box bad">Já existe cadastro com esta matrícula ou este e-mail.</div>'; return; }

  users.push({
    firstName, name, professionalRecord: matricula, matricula, email, institutionEmail, password,
    institution: institutionFromEmail(email), status:'pending', releaseMode:'24h',
    canLoginAt:new Date(Date.now() + 24*60*60*1000).toISOString(), registeredAt:new Date().toISOString()
  });
  saveUsers(users);
  byId('regMsg').innerHTML = '<div class="status-box warn">Cadastro enviado com sucesso. Seu acesso ficará disponível em até 24 horas, a menos que o painel libere rápido.</div>';
  ['regFirstName','regName','regMatricula','regEmail','regInstitutionEmail','regPass'].forEach(id => byId(id).value='');
}

function loginByMatricula(){
  const matricula = byId('loginMatricula').value.trim();
  const users = getUsers();
  const user = users.find(u => u.matricula === matricula);
  if(!user){ byId('loginMsg').innerHTML = '<div class="status-box bad">Matrícula não encontrada.</div>'; return; }
  if(user.status === 'pending'){
    const releaseText = user.releaseMode === 'fast' ? 'Seu cadastro está aguardando liberação rápida pelo painel.' : 'Seu cadastro ainda está em análise. Após até 24 horas você poderá entrar no site.';
    byId('loginMsg').innerHTML = `<div class="status-box warn">${releaseText}</div>`;
    return;
  }
  if(user.status === 'rejected'){ byId('loginMsg').innerHTML = '<div class="status-box bad">Seu cadastro foi recusado no momento. Aguarde nova liberação do painel.</div>'; return; }

  currentUser = user;
  byId('welcomeTitle').innerText = `Bem-vindo, ${user.firstName || user.name}`;
  byId('userBadge').innerText = `${user.name} • ${user.matricula}`;
  byId('authScreen').classList.add('hidden');
  byId('appScreen').classList.remove('hidden');
  setPage('dashboard');
  initializeAppContent();
  byId('loginMsg').innerHTML = '';
}

function logout(){
  currentUser = null;
  stopSimTimer();
  byId('appScreen').classList.add('hidden');
  byId('authScreen').classList.remove('hidden');
  const inp = byId('loginMatricula');
  if(inp) inp.value='';
}

function startForgotVerification(){
  const email = byId('forgotUser').value.trim().toLowerCase();
  const users = getUsers();
  const user = users.find(u => (u.email || '').toLowerCase() === email);
  if(!user){ byId('forgotMsg').innerHTML = '<div class="status-box bad">E-mail institucional não encontrado.</div>'; return; }
  forgotVerifiedEmail = email;
  byId('forgotMsg').innerHTML='';
  byId('forgotStep2').classList.remove('hidden');
  byId('forgotStep3').classList.add('hidden');
  renderRobotVerification();
}

function renderRobotVerification(){
  const shuffled = shuffle(robotImages);
  robotCorrectLabel = shuffled[Math.floor(Math.random() * shuffled.length)].label;
  byId('forgotVerifyMsg').innerHTML = `<div class="status-box warn">Clique na imagem de: <b>${robotCorrectLabel}</b></div>`;
  byId('robotGrid').innerHTML = shuffled.map(item => `
    <button class="btn btn-secondary" style="padding:10px" onclick="checkRobotImage('${item.label}')">
      <img src="${item.img}" alt="${item.label}" style="width:100%;height:120px;object-fit:contain;background:white;border-radius:12px;padding:8px;margin-bottom:8px">
      ${item.label}
    </button>
  `).join('');
}

function checkRobotImage(label){
  if(label === robotCorrectLabel){
    byId('forgotVerifyMsg').innerHTML = '<div class="status-box ok">Verificação concluída com sucesso.</div>';
    byId('forgotStep3').classList.remove('hidden');
  } else {
    byId('forgotVerifyMsg').innerHTML = '<div class="status-box bad">Imagem incorreta. Tente novamente.</div>';
    byId('forgotStep3').classList.add('hidden');
  }
}

function saveNewPassword(){
  const newPass = byId('newForgotPass').value;
  if(!forgotVerifiedEmail){ byId('forgotMsg').innerHTML = '<div class="status-box bad">Faça a verificação primeiro.</div>'; return; }
  if(newPass.length !== 7){ byId('forgotMsg').innerHTML = '<div class="status-box bad">A nova senha deve ter 7 caracteres.</div>'; return; }
  const users = getUsers();
  const idx = users.findIndex(u => (u.email || '').toLowerCase() === forgotVerifiedEmail);
  if(idx === -1){ byId('forgotMsg').innerHTML = '<div class="status-box bad">Usuário não encontrado.</div>'; return; }
  users[idx].password = newPass;
  saveUsers(users);
  byId('forgotMsg').innerHTML = '<div class="status-box ok">Senha alterada com sucesso.</div>';
}

function adminLogin(){
  if(byId('adminPass').value !== ADMIN_PASSWORD){ byId('adminMsg').innerHTML = '<div class="status-box bad">Senha do painel incorreta.</div>'; return; }
  byId('adminLoginModal').classList.add('hidden');
  byId('adminScreen').classList.remove('hidden');
  byId('authScreen').classList.add('hidden');
  renderAdmin();
  byId('adminMsg').innerHTML='';
}

function closeAdmin(){ byId('adminScreen').classList.add('hidden'); byId('authScreen').classList.remove('hidden'); byId('adminPass').value=''; }

function adminTab(tab, btn){
  document.querySelectorAll('#adminScreen .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  byId('adminPending').classList.add('hidden');
  byId('adminApproved').classList.add('hidden');
  byId('adminRejected').classList.add('hidden');
  if(tab==='pending') byId('adminPending').classList.remove('hidden');
  if(tab==='approved') byId('adminApproved').classList.remove('hidden');
  if(tab==='rejected') byId('adminRejected').classList.remove('hidden');
}

function renderUserCards(list, status){
  if(!list.length) return '<div class="card"><p>Nenhum usuário nesta categoria.</p></div>';
  const statusClass = status === 'pending' ? 'status-card-pending' : status === 'approved' ? 'status-card-approved' : 'status-card-rejected';
  const pillClass = status === 'pending' ? 'pending' : status === 'approved' ? 'approved' : 'rejected';
  const statusLabel = status === 'pending' ? 'Pendente' : status === 'approved' ? 'Aprovado' : 'Recusado';
  return list.map(u => `
    <div class="card ${statusClass}" style="margin-bottom:14px;">
      <span class="status-pill ${pillClass}">${statusLabel}</span>
      <h3>${u.name}</h3>
      <p><b>E-mail institucional:</b> ${u.email || 'Não informado'}</p>
      <p><b>Matrícula:</b> ${u.matricula}</p>
      ${status==='pending' ? `
        <p><b>Liberação:</b> ${u.releaseMode === 'fast' ? 'Rápida' : '24 horas'}</p>
        <div class="row wrap">
          <button class="btn btn-violet" onclick="setReleaseMode('${u.matricula}','fast')">Liberar rápido</button>
          <button class="btn btn-secondary" onclick="setReleaseMode('${u.matricula}','24h')">Em 24 horas</button>
          <button class="btn btn-success" onclick="changeStatus('${u.matricula}','approved')">Aprovar</button>
          <button class="btn btn-danger" onclick="changeStatus('${u.matricula}','rejected')">Recusar</button>
        </div>` : ''}
      ${status==='rejected' ? `<button class="btn btn-success" onclick="changeStatus('${u.matricula}','approved')">Aceitar depois</button>` : ''}
    </div>
  `).join('');
}

function setReleaseMode(matricula, mode){
  const users = getUsers();
  const i = users.findIndex(u=>u.matricula===matricula);
  if(i>=0){
    users[i].releaseMode = mode;
    users[i].canLoginAt = mode === 'fast' ? new Date().toISOString() : new Date(Date.now() + 24*60*60*1000).toISOString();
    saveUsers(users);
    renderAdmin();
  }
}

function changeStatus(matricula, status){
  const users = getUsers();
  const i = users.findIndex(u=>u.matricula===matricula);
  if(i>=0){
    users[i].status = status;
    if(status === 'approved'){
      users[i].releaseMode = users[i].releaseMode || 'fast';
      if(users[i].releaseMode === 'fast') users[i].canLoginAt = new Date().toISOString();
    }
    saveUsers(users);
    renderAdmin();
  }
}

function renderAdmin(){
  const users = getUsers();
  const now = new Date();
  users.forEach(u => {
    if(u.status === 'pending' && u.releaseMode === '24h' && u.canLoginAt && new Date(u.canLoginAt) <= now){ u.status = 'approved'; }
  });
  saveUsers(users);
  const pending = users.filter(u=>u.status==='pending');
  const approved = users.filter(u=>u.status==='approved');
  const rejected = users.filter(u=>u.status==='rejected');
  byId('adminPending').innerHTML = renderUserCards(pending,'pending');
  byId('adminApproved').innerHTML = renderUserCards(approved,'approved');
  byId('adminRejected').innerHTML = renderUserCards(rejected,'rejected');
  byId('adminPendingCount').textContent = pending.length;
  byId('adminApprovedCount').textContent = approved.length;
  byId('adminRejectedCount').textContent = rejected.length;
}

function consultMatricula(){
  const matricula = byId('lookupMatricula').value.trim();
  const users = getUsers();
  const user = users.find(u=>u.matricula===matricula);
  if(!user){ byId('matriculaStatus').innerHTML = '<div class="status-box bad">Matrícula não encontrada ou inválida.</div>'; return; }
  byId('matriculaStatus').innerHTML = `<div class="status-box ok">Matrícula válida. Nome: <b>${user.name}</b> | E-mail institucional: <b>${user.email || 'Não informado'}</b> | Matrícula: <b>${user.matricula}</b> | Status: <b>${translateStatus(user.status)}</b></div>`;
}

function setPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  byId('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nav = byId('nav-'+page); if(nav) nav.classList.add('active');
  if(page==='systems'){ renderSystemTabs(); renderSystems(); }
  if(page==='practice'){ renderPracticeBank(); }
  if(page==='game'){ startMatchGame(); }
  if(page==='ranking'){ renderRanking(); }
  closeSidebarOnMobile();
}

function initializeAppContent(){
  byId('statSystems').textContent = systems.length;
  byId('statTopics').textContent = topics.length;
  byId('statFlash').textContent = flashcards.length;
  byId('statQuestions').textContent = questions.length;
  renderOverview(); renderAtlas(); renderSystemTabs(); renderSystems(); renderTopics(); renderFlashcards(); setupPracticeTheme(); renderPracticeBank(); startMatchGame(); setupSimuladoThemes(); renderRanking(); updateSideProgress(0, questions.length * 10);
}

function renderOverview(){
  const cards = [
    {title:'Atlas anatômico', img:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Skeleton_front.svg', text:'Visualização completa do esqueleto humano por regiões.'},
    {title:'Sistemas do corpo', img:'https://upload.wikimedia.org/wikipedia/commons/7/71/Diagram_of_the_human_heart_%28cropped%29.svg', text:'Estudo organizado por sistemas anatômicos.'},
    {title:'Flashcards', img:'https://upload.wikimedia.org/wikipedia/commons/3/30/Gray684.png', text:'Revisão rápida e memorização visual.'},
    {title:'Simulado', img:'https://upload.wikimedia.org/wikipedia/commons/8/8f/HandBones.svg', text:'Treino com cronômetro, pontuação e ranking.'}
  ];
  byId('overviewContainer').innerHTML = cards.map(c=>`<div class="card overview-card"><h3>${c.title}</h3><img src="${c.img}" alt="${c.title}"><p>${c.text}</p></div>`).join('');
}

function renderAtlas(){
  const term = (byId('searchAtlas')?.value || '').toLowerCase().trim();
  const filtered = atlasData.filter(item => !term || item.title.toLowerCase().includes(term) || item.text.toLowerCase().includes(term) || item.bones.some(b=>b.toLowerCase().includes(term)));
  byId('atlasContainer').innerHTML = filtered.map(item=>`<div class="card atlas-card"><h3>${item.title}</h3><img src="${item.image}" alt="${item.title}"><p>${item.text}</p><ul class="list-clean">${item.bones.map(b=>`<li>${b}</li>`).join('')}</ul></div>`).join('') || '<div class="card"><p>Nenhum resultado encontrado.</p></div>';
}

function renderSystemTabs(){
  const groups = ['Todos', ...new Set(systems.map(s=>s.group))];
  byId('systemTabs').innerHTML = groups.map(g=>`<button class="tab-btn ${g===currentSystemGroup?'active':''}" onclick="selectSystemGroup('${g}', this)">${g}</button>`).join('');
}
function selectSystemGroup(group, btn){ currentSystemGroup = group; document.querySelectorAll('#systemTabs .tab-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderSystems(); }
function renderSystems(){
  const filtered = currentSystemGroup === 'Todos' ? systems : systems.filter(s=>s.group===currentSystemGroup);
  byId('systemsContainer').innerHTML = filtered.map(s=>`<div class="card system-card"><span class="badge">${s.tag}</span><h3 class="top-gap">${s.title}</h3><img src="${s.image}" alt="${s.title}"><p>${s.text}</p><div class="small"><b>Grupo:</b> ${s.group}</div></div>`).join('');
}

function renderTopics(){ byId('topicsContainer').innerHTML = topics.map(t=>`<div class="card topic-card"><span class="badge">${t.theme}</span><h3 class="top-gap">${t.title}</h3><img src="${t.image}" alt="${t.title}"><p>${t.text}</p><div class="small"><b>Exercício:</b> ${t.exercise}</div></div>`).join(''); }

function renderFlashcards(){
  byId('flashcardsContainer').innerHTML = flashcards.map((f,i)=>`<div class="flash-card" id="flash-${i}" onclick="flipCard(${i})"><div class="flash-inner"><div class="flash-face"><h3>Pergunta</h3><p style="font-size:20px;font-weight:800">${f.front}</p><p class="small">Toque para ver a resposta</p></div><div class="flash-face flash-back"><h3>Resposta</h3><p style="line-height:1.7">${f.back}</p><p class="small">Toque para voltar</p></div></div></div>`).join('');
}
function flipCard(i){ byId(`flash-${i}`).classList.toggle('flipped'); }

function setupPracticeTheme(){ const themes = ['Todos', ...new Set(questions.map(q=>q.theme))]; byId('practiceTheme').innerHTML = themes.map(t=>`<option value="${t}">${t}</option>`).join(''); }
function renderPracticeBank(){
  const theme = byId('practiceTheme').value || 'Todos';
  const filtered = theme === 'Todos' ? questions : questions.filter(q=>q.theme===theme);
  byId('practiceContainer').innerHTML = filtered.map((q,i)=>`<div class="card question-card"><span class="badge">${q.theme}</span><h3 class="top-gap">Questão ${i+1}</h3><p><b>${q.q}</b></p><img src="${q.img}" alt="Questão"><ul class="list-clean">${q.options.map(o=>`<li>${o}</li>`).join('')}</ul><div class="small">Resposta correta: <b>${q.answer}</b></div></div>`).join('') || '<div class="card"><p>Nenhuma questão encontrada.</p></div>';
}

function startMatchGame(){
  currentMatches = shuffle(matchPairs).slice(0,4);
  const names = shuffle(currentMatches.map(p=>p.name));
  const descs = shuffle(currentMatches.map(p=>p.desc));
  byId('matchNames').innerHTML = names.map(n=>`<div class="match-item" draggable="true" ondragstart="drag(event)" id="drag-${slug(n)}" data-name="${n}">${n}</div>`).join('');
  byId('matchDrops').innerHTML = descs.map(d=>`<div class="drop-zone" data-desc="${d}" ondrop="drop(event)" ondragover="allowDrop(event)"><div class="small">${d}</div></div>`).join('');
  byId('gameMsg').innerHTML = '<div class="status-box warn">Arraste os nomes para as descrições corretas.</div>';
}
function allowDrop(ev){ ev.preventDefault(); }
function drag(ev){ ev.dataTransfer.setData('text', ev.target.dataset.name); }
function drop(ev){ ev.preventDefault(); const name = ev.dataTransfer.getData('text'); ev.currentTarget.setAttribute('data-selected', name); ev.currentTarget.innerHTML = `<div class="small">${ev.currentTarget.dataset.desc}</div><div style="margin-top:8px;font-weight:800">${name}</div>`; }
function checkMatchGame(){
  const zones = [...document.querySelectorAll('.drop-zone')];
  let correct = 0;
  zones.forEach(z=>{ const selected = z.getAttribute('data-selected'); const pair = currentMatches.find(p=>p.desc===z.dataset.desc); z.classList.remove('correct','wrong'); if(selected && pair && selected===pair.name){ z.classList.add('correct'); correct++; } else { z.classList.add('wrong'); } });
  byId('gameMsg').innerHTML = `<div class="status-box ${correct===zones.length?'ok':'warn'}">Você acertou <b>${correct}</b> de <b>${zones.length}</b> associações.</div>`;
}

function setupSimuladoThemes(){ const themes = [...new Set(questions.map(q=>q.theme))]; byId('simTheme').innerHTML = '<option value="Todos">Todos os temas</option>' + themes.map(t=>`<option value="${t}">${t}</option>`).join(''); byId('simTotal').textContent = '0'; }
function simPointsEl(){ byId('simPoints').textContent = simPoints; }
function startSimulado(){
  stopSimTimer();
  simThemeCurrent = byId('simTheme').value;
  const count = parseInt(byId('simCount').value, 10);
  const pool = simThemeCurrent === 'Todos' ? questions : questions.filter(q=>q.theme===simThemeCurrent);
  simQuestions = shuffle(pool).slice(0, Math.min(count, pool.length));
  simIndex = 0; simPoints = 0; simSeconds = 900; simPointsEl(); byId('simTotal').textContent = simQuestions.length;
  if(!simQuestions.length){ byId('simuladoArea').innerHTML = '<div class="status-box bad">Não há questões suficientes para este tema.</div>'; return; }
  renderSimQuestion(); runSimTimer(); updateSideProgress(0, simQuestions.length * 10);
}
function renderSimQuestion(){
  byId('simCurrent').textContent = simIndex + 1;
  const q = simQuestions[simIndex];
  byId('simuladoArea').innerHTML = `<div class="card"><span class="badge">${q.theme}</span><h3 class="top-gap">${q.q}</h3><img src="${q.img}" alt="Questão" style="width:100%;max-height:320px;object-fit:contain;background:white;border-radius:18px;padding:10px"><div class="grid grid-2 top-gap">${q.options.map(opt=>`<button class="option-btn" onclick="answerSimQuestion(this, '${escapeQuotes(opt)}')">${opt}</button>`).join('')}</div></div>`;
}
function answerSimQuestion(btn, choice){
  const q = simQuestions[simIndex];
  [...document.querySelectorAll('.option-btn')].forEach(b=>{ const text = b.textContent; if(text === q.answer) b.classList.add('correct'); if(text === choice && choice !== q.answer) b.classList.add('wrong'); b.disabled = true; });
  if(choice === q.answer) simPoints += 10;
  simPointsEl(); updateSideProgress(simPoints, simQuestions.length * 10);
  setTimeout(()=>{ simIndex++; if(simIndex < simQuestions.length) renderSimQuestion(); else finishSimulado(); }, 900);
}
function finishSimulado(){
  stopSimTimer();
  byId('simuladoArea').innerHTML = `<div class="status-box ok">Simulado finalizado. Você fez <b>${simPoints} pontos</b> no tema <b>${simThemeCurrent}</b>.</div>`;
  if(currentUser){ const scores = getScores(); scores.push({name: currentUser.name, matricula: currentUser.matricula, points: simPoints, theme: simThemeCurrent, date: new Date().toLocaleString('pt-BR')}); saveScores(scores); renderRanking(); }
  updateSideProgress(simPoints, simQuestions.length * 10 || 10);
}
function resetSimulado(){ stopSimTimer(); simQuestions=[]; simIndex=0; simPoints=0; simSeconds=900; byId('simCurrent').textContent='0'; byId('simTotal').textContent='0'; simPointsEl(); byId('simTime').textContent='15:00'; byId('simuladoArea').innerHTML=''; updateSideProgress(0,10); }
function runSimTimer(){ stopSimTimer(); updateSimClock(); simTimer = setInterval(()=>{ simSeconds--; updateSimClock(); if(simSeconds <= 0) finishSimulado(); }, 1000); }
function stopSimTimer(){ if(simTimer) clearInterval(simTimer); }
function updateSimClock(){ const min = String(Math.floor(simSeconds/60)).padStart(2,'0'); const sec = String(simSeconds%60).padStart(2,'0'); byId('simTime').textContent = `${min}:${sec}`; }
function updateSideProgress(points,total){ byId('sidePoints').textContent = points; const percent = total ? Math.round((points/total)*100) : 0; byId('progressBar').style.width = percent + '%'; byId('progressText').textContent = percent + '%'; }
function renderRanking(){ const scores = getScores().sort((a,b)=>b.points-a.points); byId('rankingBody').innerHTML = scores.length ? scores.map((s,i)=>`<tr><td>${i+1}</td><td>${s.name}</td><td>${s.matricula}</td><td>${s.points}</td><td>${s.theme || 'Geral'}</td><td>${s.date}</td></tr>`).join('') : '<tr><td colspan="6">Nenhuma pontuação registrada ainda.</td></tr>'; }

initializeLoginPremium();
