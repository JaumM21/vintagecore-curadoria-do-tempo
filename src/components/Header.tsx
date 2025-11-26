import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { items } = useCart();
  const cartCount = items.reduce((s, i) => s + i.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="VintageCore" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-primary">VintageCore</h1>
              <p className="text-xs text-muted-foreground">Curadoria do Tempo</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/catalog" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Catálogo
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Sobre Nós
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contato
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar raridades..."
                className="w-64 bg-card border-border"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/catalog?search=${encodeURIComponent(term)}`);
                  }
                }}
              />
              <Button variant="secondary" size="icon" onClick={() => navigate(`/catalog?search=${encodeURIComponent(term)}`)}>
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2 animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Catálogo
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Contato
            </Link>
            <div className="pt-2 lg:hidden">
              <Input
                type="search"
                placeholder="Buscar raridades..."
                className="w-full bg-card border-border"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const value = (e.target as HTMLInputElement).value;
                    navigate(`/catalog?search=${encodeURIComponent(value)}`);
                  }
                }}
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
