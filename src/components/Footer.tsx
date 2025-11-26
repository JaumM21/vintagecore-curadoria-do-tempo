import { Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="VintageCore" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-serif font-bold text-primary">VintageCore</h3>
                <p className="text-xs text-muted-foreground">Curadoria do Tempo</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Resgatando o valor emocional e cultural do passado através de peças autênticas e raras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=games" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Eletrônicos Clássicos
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=audio" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Áudio & Vinis
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=photo" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Fotografia Vintage
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=collectibles" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Colecionáveis
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Conecte-se</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contato@vintagecore.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              contato@vintagecore.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 VintageCore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
