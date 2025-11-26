import { Badge } from "@/components/ui/badge";

const DesignSystem = () => {
  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Design System — Documentação</h1>
        <p className="text-muted-foreground mb-6">Rota forçada: <code>/__design-system</code> (digite diretamente na barra de endereços).</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Como acessar</h2>
          <p className="text-muted-foreground">Esta página não aparece em menus públicos. Para acessá-la, digite exatamente a URL da rota forçada no navegador: <strong>/__design-system</strong>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tokens de Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border/30 rounded">
              <h3 className="font-semibold">Espaçamento</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li><strong>space-1:</strong> 4px</li>
                <li><strong>space-2:</strong> 8px</li>
                <li><strong>space-3:</strong> 12px</li>
                <li><strong>space-4:</strong> 16px</li>
                <li><strong>space-6:</strong> 24px</li>
                <li><strong>space-8:</strong> 32px</li>
              </ul>
            </div>

            <div className="p-4 bg-card border border-border/30 rounded">
              <h3 className="font-semibold">Tipografia</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li><strong>Fonte de títulos:</strong> "Playfair Display", serif (usada em headings/brand)</li>
                <li><strong>Fonte de corpo:</strong> "Inter", sans-serif (legibilidade e interfaces)</li>
                <li><strong>Tamanhos:</strong> h1=48px, h2=32px, body=16px, small=14px</li>
                <li><strong>Line-height:</strong> 1.2 títulos / 1.5 corpo</li>
              </ul>
            </div>

            <div className="p-4 bg-card border border-border/30 rounded">
              <h3 className="font-semibold">Rounding & Sombra</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li><strong>border-radius-sm:</strong> 6px</li>
                <li><strong>border-radius-md:</strong> 12px</li>
                <li><strong>elevations:</strong> card: 0 6px 18px rgba(0,0,0,0.06)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Paleta de Cores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded bg-card border border-border/30">
              <div className="h-16 w-full rounded mb-3" style={{ background: '#0f172a' }} />
              <div className="text-sm font-semibold">Primary</div>
              <div className="text-xs text-muted-foreground">#0f172a</div>
            </div>

            <div className="p-4 rounded bg-card border border-border/30">
              <div className="h-16 w-full rounded mb-3" style={{ background: '#c59f47' }} />
              <div className="text-sm font-semibold">Gold (brand)</div>
              <div className="text-xs text-muted-foreground">#c59f47</div>
            </div>

            <div className="p-4 rounded bg-card border border-border/30">
              <div className="h-16 w-full rounded mb-3" style={{ background: '#0ea5a0' }} />
              <div className="text-sm font-semibold">Accent</div>
              <div className="text-xs text-muted-foreground">#0ea5a0</div>
            </div>

            <div className="p-4 rounded bg-card border border-border/30">
              <div className="h-16 w-full rounded mb-3" style={{ background: '#f8fafc' }} />
              <div className="text-sm font-semibold">Background</div>
              <div className="text-xs text-muted-foreground">#f8fafc</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Observações: utilize o dourado (#c59f47) com moderação para destacar elementos de marca; `accent` é usado para CTAs secundárias.
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Voz da Empresa</h2>
          <div className="p-4 bg-card border border-border/30 rounded text-muted-foreground">
            <p className="mb-2">Tom: Confiante, caloroso e culto.</p>
            <p className="mb-2">Estilo: Use frases claras, evite jargões técnicos quando possível, mas mantenha respeitabilidade histórica e autoridade em curadoria.</p>
            <p className="mb-2">Exemplos:</p>
            <ul className="list-disc ml-6">
              <li><strong>Header:</strong> "Onde o Passado Encontra o Presente" — confiante e evocativo.</li>
              <li><strong>Descrição de produto:</strong> "Peça autenticada, cuidadosamente restaurada — uma história pronta para sua coleção."</li>
              <li><strong>Call-to-action:</strong> "Garanta já" / "Adicionar ao Carrinho" — direto e convidativo.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Missão, Valores e Visão</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border/30 rounded">
              <h4 className="font-semibold">Missão</h4>
              <p className="text-sm text-muted-foreground mt-2">Preservar e compartilhar objetos vintage autênticos, conectando colecionadores a peças que contam histórias.</p>
            </div>

            <div className="p-4 bg-card border border-border/30 rounded">
              <h4 className="font-semibold">Valores</h4>
              <ul className="text-sm text-muted-foreground mt-2 list-disc ml-5">
                <li>Autenticidade</li>
                <li>Curadoria cuidadosa</li>
                <li>Respeito pela história</li>
                <li>Transparência e confiança</li>
              </ul>
            </div>

            <div className="p-4 bg-card border border-border/30 rounded">
              <h4 className="font-semibold">Visão</h4>
              <p className="text-sm text-muted-foreground mt-2">Ser a referência nacional em curadoria e comercialização de peças vintage, promovendo cultura e preservação.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Componentes & Uso</h2>
          <p className="text-sm text-muted-foreground">Esta documentação deve ser considerada viva — para cada componente (botões, badges, inputs, cards) siga os tokens acima para espaçamento, tipografia e cores.</p>
        </section>

        <div className="text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default DesignSystem;
