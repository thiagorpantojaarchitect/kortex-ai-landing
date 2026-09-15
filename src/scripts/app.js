
  // Billing Toggle Logic
  let isAnnual = true;
  function toggleBilling() {
    isAnnual = !isAnnual;
    const knob = document.getElementById('billing-toggle-knob');
    const pricePro = document.getElementById('price-pro');
    const periodPro = document.getElementById('period-pro');
    const btn = document.getElementById('billing-toggle-btn');

    if (isAnnual) {
      knob.style.transform = 'translateX(28px)';
      pricePro.innerText = '$71';
      periodPro.innerText = '/mês (faturado anual)';
      btn.classList.add('bg-primary-container/20');
    } else {
      knob.style.transform = 'translateX(0px)';
      pricePro.innerText = '$89';
      periodPro.innerText = '/mês';
      btn.classList.remove('bg-primary-container/20');
    }
  }

  // Set default initial position
  document.addEventListener('DOMContentLoaded', () => {
    const knob = document.getElementById('billing-toggle-knob');
    if (knob) knob.style.transform = 'translateX(28px)';
  });

  // Interactive Playground Workflow Switcher
  const workflows = {
    finance: {
      agent1: { title: 'Data Ingestion Agent', desc: 'Extração vetorizada de bases OLAP e feeds contínuos em 4 streams simultâneos.' },
      agent2: { title: 'Vector Reasoning Engine', desc: 'Raciocínio lógico por cadeias de pensamento adaptativas com auto-correção.' },
      agent3: { title: 'Synthesis & Audit Sandbox', desc: 'Verificação estática de conformidade e testes em contêiner efêmero com isolamento gVisor.' },
      tokens: '142 tokens/sec',
      latency: 'Latência: 18ms',
      code: `<span class="text-outline">// Inicializando Orquestrador Kortex Neural Mesh</span>\n<span class="text-primary">import</span> { Orchestrator, ConsensusEngine } <span class="text-primary">from</span> <span class="text-tertiary-fixed">'@kortex/mesh'</span>;\n\n<span class="text-on-surface-variant">const</span> pipeline = <span class="text-primary">new</span> Orchestrator({\n  strategy: <span class="text-tertiary-fixed">'multi-agent-speculative'</span>,\n  timeoutMs: <span class="text-secondary">420</span>,\n  securityEnclave: <span class="text-primary">true</span>\n});\n\n<span class="text-outline">// Evento: Análise de Fluxos e Projeção Concluída</span>\n<span class="text-tertiary-fixed">[2025-02-18 10:44:02.112]</span> Agente: <span class="text-primary-fixed">Vector Reasoning</span> validou 89 nós causais.\n<span class="text-secondary-fixed">Resultado:</span> Rentabilidade calculada com desvio padrão &lt; 0.04%.\n<span class="text-primary">[SUCCESS]</span> Assinatura criptográfica SHA-256 gerada com sucesso.`
    },
    refactor: {
      agent1: { title: 'AST Parser & Dependency Graph', desc: 'Mapeamento de símbolos e chamadas circulares em 128 arquivos TypeScript.' },
      agent2: { title: 'Linter & Semantic Refactor', desc: 'Aplicação de padrões funcionais assíncronos e remoção de memory leaks.' },
      agent3: { title: 'Unit Test Generation Sandbox', desc: 'Execução de testes unitários com Jest em contêiner isolado com cobertura de 98.4%.' },
      tokens: '215 tokens/sec',
      latency: 'Latência: 24ms',
      code: `<span class="text-outline">// Módulo de Refatoração de Código em Tempo Real</span>\n<span class="text-primary">export async function</span> <span class="text-primary-fixed">optimizeMemoryStream</span>(buffer: StreamBuffer) {\n  <span class="text-outline">// Detectado vazamento potencial no buffer circular legado</span>\n  <span class="text-on-surface-variant">const</span> cleanStream = buffer.pipeThrough(<span class="text-primary">new</span> TransformStream({\n    transform(chunk, controller) {\n      controller.enqueue(structuredClone(chunk));\n    }\n  }));\n  <span class="text-tertiary-fixed">[VERIFIED]</span> 0 vazamentos encontrados. 14 testes passaram sem regressão.`
    },
    security: {
      agent1: { title: 'Static Code & Secrets Scanner', desc: 'Varredura de padrões regex de alta velocidade e credenciais expostas no commit.' },
      agent2: { title: 'Dynamic Fuzzing Agent', desc: 'Envio concorrente de payloads mutantes em endpoints GraphQL para detectar RCE e SQLi.' },
      agent3: { title: 'Policy Attestation Enclave', desc: 'Emissão de atestado formal assinado para liberação de deploy em produção.' },
      tokens: '188 tokens/sec',
      latency: 'Latência: 12ms',
      code: `<span class="text-outline">// Auditoria de Conformidade em Tempo de Execução</span>\n<span class="text-primary">const</span> report = <span class="text-primary">await</span> SecurityAttestor.scan({\n  target: <span class="text-tertiary-fixed">'cluster://k8s.api.production'</span>,\n  cveDatabase: <span class="text-tertiary-fixed">'2025.2-revised'</span>\n});\n\n<span class="text-tertiary-fixed">[AUDIT STATUS]</span> Vulnerabilidades Críticas: 0 | Médias: 0\n<span class="text-primary-fixed">[ATTESTATION]</span> Criptograma emitido via AWS KMS Enclave HSM.\n<span class="text-primary">[PASSED]</span> Deploy aprovado para pipeline de CI/CD.`
    }
  };

  function switchWorkflow(type) {
    const data = workflows[type];
    if (!data) return;

    // Update buttons
    ['finance', 'refactor', 'security'].forEach(t => {
      const btn = document.getElementById('tab-' + t);
      if (t === type) {
        btn.className = 'workflow-btn px-4 py-2 rounded-full font-body-sm text-body-sm font-medium bg-primary-container text-on-primary-fixed transition-all';
      } else {
        btn.className = 'workflow-btn px-4 py-2 rounded-full font-body-sm text-body-sm font-medium text-on-surface-variant hover:text-on-surface transition-all';
      }
    });

    // Update fields
    document.getElementById('agent-1-title').innerText = data.agent1.title;
    document.getElementById('agent-1-desc').innerText = data.agent1.desc;
    document.getElementById('agent-2-title').innerText = data.agent2.title;
    document.getElementById('agent-2-desc').innerText = data.agent2.desc;
    document.getElementById('agent-3-title').innerText = data.agent3.title;
    document.getElementById('agent-3-desc').innerText = data.agent3.desc;

    document.getElementById('telemetry-speed').innerText = data.tokens;
    document.getElementById('telemetry-lat').innerText = data.latency;
    document.getElementById('stream-code-output').innerHTML = data.code;
  }

  function triggerSimulateRun() {
    const stream = document.getElementById('stream-code-output');
    stream.style.opacity = '0.4';
    setTimeout(() => {
      stream.style.opacity = '1';
    }, 250);
  }

  // FAQ Accordion Toggle
  function toggleFaq(index) {
    const content = document.getElementById('faq-content-' + index);
    const icon = document.getElementById('faq-icon-' + index);
    const isHidden = content.classList.contains('hidden');

    // Close all
    [1, 2, 3, 4].forEach(i => {
      const c = document.getElementById('faq-content-' + i);
      const ic = document.getElementById('faq-icon-' + i);
      if (c && ic) {
        c.classList.add('hidden');
        ic.innerText = 'expand_more';
        ic.style.transform = 'rotate(0deg)';
      }
    });

    // Open selected if was closed
    if (isHidden) {
      content.classList.remove('hidden');
      icon.innerText = 'expand_less';
      icon.style.transform = 'rotate(180deg)';
    }
  }

  // Form submission feedback
  function handleSignup(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const input = e.target.querySelector('input');
    const originalText = btn.innerText;
    btn.innerText = 'Criando Workspace...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = 'Pronto! Verifique seu e-mail';
      input.value = '';
      setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
      }, 3000);
    }, 800);
  }

// Os handlers são referenciados por atributos inline (onclick/onsubmit) no index.html.
// Como este arquivo é carregado como módulo ES, precisamos expô-los no escopo global.
Object.assign(window, { toggleBilling, switchWorkflow, triggerSimulateRun, toggleFaq, handleSignup });
