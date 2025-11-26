import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Meu Carrinho</h1>
          <p className="text-muted-foreground">Verifique seus itens antes de finalizar a compra.</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg text-muted-foreground mb-4">Seu carrinho está vazio.</p>
            <Link to="/catalog">
              <Button>Explorar Catálogo</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-border/30 rounded-lg bg-card">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantidade: {item.quantity}</p>
                      <p className="text-accent font-bold mt-2">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button variant="ghost" onClick={() => removeFromCart(item.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-4 border border-border/30 rounded-lg bg-card">
              <h4 className="font-semibold text-lg">Resumo do Pedido</h4>
              <div className="mt-4 flex justify-between text-muted-foreground">
                <span>Itens</span>
                <span>{items.length}</span>
              </div>
              <div className="mt-2 flex justify-between font-bold text-accent">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>

              <div className="mt-6 space-y-2">
                <Button className="w-full">Finalizar Compra</Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Limpar Carrinho
                </Button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
