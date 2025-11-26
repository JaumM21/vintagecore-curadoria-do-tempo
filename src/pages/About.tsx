import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Nossa História
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            A Curadoria do Tempo
          </h1>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  A <span className="font-serif font-bold text-accent">VintageCore</span> nasceu da paixão por objetos que carregam histórias. Tudo começou quando seis fundadores — cinco amigos colecionadores — perceberam que muitas pessoas queriam itens retrô de qualidade, mas tinham dificuldade de encontrá-los em um único lugar.
                </p>
                <p>
                  Produtos vintage estavam espalhados em brechós, feiras, lojas físicas pequenas e marketplaces sem curadoria. Com isso em mente, em 2025 surgiu a <span className="font-serif font-bold">VintageCore</span>, um e-commerce especializado em produtos retrô, selecionados um a um, com foco em autenticidade, estilo e nostalgia.
                </p>
                <p>
                  A proposta era simples, mas inovadora: reunir em um único site itens que conectassem gerações — desde decorações inspiradas nos anos 50, 60, 70, 80 e 90 até eletrônicos com design vintage, discos, cartazes e objetos colecionáveis.
                </p>
                <p className="text-muted-foreground italic border-l-4 border-accent pl-4">
                  "Nosso objetivo é resgatar o valor emocional e cultural do passado, oferecendo peças que celebram história, estilo e memória."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="border-border/50 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Missão</h2>
              </div>
              <p className="text-foreground leading-relaxed">
                Resgatar o valor emocional e cultural do passado, oferecendo peças retrô e vintage que conectam gerações, celebram histórias e transformam ambientes com autenticidade e estilo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary">Visão</h2>
              </div>
              <p className="text-foreground leading-relaxed">
                Ser o maior ecommerce de curadoria retrô do Brasil, reconhecido por unir nostalgia, qualidade e inovação, inspirando uma comunidade apaixonada por estilo, história e memória.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              Nossos Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              O Que Nos Move
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Autenticidade",
                description: "Cada peça é cuidadosamente selecionada e verificada para garantir sua originalidade e história"
              },
              {
                icon: Target,
                title: "Curadoria",
                description: "Especialização em identificar e oferecer os melhores artigos vintage e colecionáveis"
              },
              {
                icon: Eye,
                title: "Paixão",
                description: "Amor genuíno pelo passado e dedicação em conectar pessoas com objetos que têm alma"
              }
            ].map((value) => (
              <Card key={value.title} className="border-border/50 text-center hover-lift">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
