import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  decade?: string;
  rarity?: "comum" | "raro" | "muito-raro";
}

const rarityColors = {
  "comum": "bg-secondary/20 text-secondary-foreground",
  "raro": "bg-accent/20 text-accent-foreground",
  "muito-raro": "bg-gold-burnt/20 text-gold-burnt"
};

const ProductCard = ({ id, name, price, image, category, decade, rarity }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image });
    navigate("/cart");
  };
  return (
    <Card className="group overflow-hidden hover-lift border-border/50 bg-card">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {decade && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {decade}
            </Badge>
          )}
          {rarity && (
            <Badge className={`absolute top-3 right-3 ${rarityColors[rarity]}`}>
              {rarity === "muito-raro" ? "Muito Raro" : rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </Badge>
          )}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-serif font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-2xl font-bold text-accent font-serif">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAdd} className="w-full bg-primary hover:bg-secondary text-primary-foreground group">
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce-subtle" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
