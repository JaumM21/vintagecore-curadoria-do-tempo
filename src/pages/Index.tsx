import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import images from "@/lib/images";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Walkman Sony WM-10",
      price: 850.0,
      image: images.walkman,
      category: "Áudio Portátil",
      decade: "Anos 80",
      rarity: "raro" as const
    },
    {
      id: "2",
      name: "Game Boy Color Edição Limitada",
      price: 1200.0,
      image: images.gameboy,
      category: "Games Clássicos",
      decade: "Anos 90",
      rarity: "muito-raro" as const
    },
    {
      id: "3",
      name: "Câmera Polaroid OneStep",
      price: 680.0,
      image: images.polaroid,
      category: "Fotografia",
      decade: "Anos 70",
      rarity: "comum" as const
    },
    {
      id: "4",
      name: "Vitrola Toca-Discos Vintage",
      price: 2500.0,
      image: images.vitrola,
      category: "Áudio",
      decade: "Anos 60",
      rarity: "muito-raro" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
              ✨ Curadoria do Tempo
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Onde o Passado <br />
              <span className="text-gradient-gold">Encontra o Presente</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra peças retrô autênticas e artigos vintage que celebram história e estilo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground group">
                  Explorar Catálogo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Nossa História
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-accent" />
                <span>Autenticidade Garantida</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-5 w-5 text-accent" />
                <span>Curadoria Especializada</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>Peças com História</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
               Seleção Especial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Garimpos da Semana
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peças raras e cuidadosamente selecionadas que acabaram de chegar à nossa coleção
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Ver Catálogo Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Explore por Categoria
            </h2>
            <p className="text-muted-foreground">
              Do vintage ao retrô, encontre o que procura
            </p>
          </div>

            <div className="flex flex-wrap gap-4 mx-auto max-w-4xl justify-center">
            {[
              { name: "Games Clássicos", key: "games", image: images.gameboy },
              { name: "Áudio & Vinis", key: "audio", image: images.unsplash_audio },
              { name: "Fotografia", key: "photo", image: images.polaroid },
              { name: "Colecionáveis", key: "collectibles", image: images.collectibles }
            ].map((category) => (
              <Link
              key={category.key}
              to={`/catalog?category=${encodeURIComponent(category.key)}`}
              className="group relative overflow-hidden rounded-lg hover-lift w-1/2 md:w-1/4"
              >
              <div className="aspect-square">
                <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-center justify-center p-4 text-center">
                <h3 className="text-white font-serif font-bold text-lg">
                {category.name}
                </h3>
              </div>
              </Link>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
