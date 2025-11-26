import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            Fale Conosco
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Estamos Aqui Para Ajudar
          </h1>
          <p className="text-muted-foreground">
            Dúvidas sobre produtos, autenticidade ou pedidos? Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Resposta em até 24 horas
                    </p>
                    <a href="mailto:contato@vintagecore.com" className="text-accent hover:underline">
                      contato@vintagecore.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">Chat ao Vivo</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Segunda a sexta, 9h às 18h
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent">
                      Iniciar conversa
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">Horário</h3>
                    <p className="text-sm text-muted-foreground">
                      Segunda a sexta: 9h - 18h<br />
                      Sábado: 10h - 14h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Envie uma Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground block mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Sobre o que você quer falar?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva sua dúvida ou solicitação..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
