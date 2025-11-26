import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal } from "lucide-react";
import images from "@/lib/images";
import { useSearchParams } from "react-router-dom";

const Catalog = () => {
  const [selectedDecade, setSelectedDecade] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
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
    },
    {
      id: "5",
      name: "Super Nintendo Original",
      price: 950.0,
      image: images.snes,
      category: "Games Clássicos",
      decade: "Anos 90",
      rarity: "raro" as const
    },
    {
      id: "6",
      name: "Rádio Portátil Vintage",
      price: 420.0,
      image: images.radio,
      category: "Áudio",
      decade: "Anos 70",
      rarity: "comum" as const
    }
  ];

  const [searchParams] = useSearchParams();
  const searchTerm = (searchParams.get("search") || "").toLowerCase().trim();
  const categoryParam = (searchParams.get("category") || "all").toLowerCase();

  const normalizeCategoryParam = (p: string) => {
    if (!p) return "all";
    const v = p.toLowerCase();
    if (["all", "games", "audio", "photo", "collectibles"].includes(v)) return v;
    // try mapping common display names
    if (v.includes("game")) return "games";
    if (v.includes("áudio") || v.includes("audio") || v.includes("vin")) return "audio";
    if (v.includes("foto")) return "photo";
    if (v.includes("colecion")) return "collectibles";
    return "all";
  };

  useEffect(() => {
    const normalized = normalizeCategoryParam(categoryParam);
    if (normalized !== selectedCategory) setSelectedCategory(normalized);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  const decadeMap: Record<string, string> = {
    "60s": "Anos 60",
    "70s": "Anos 70",
    "80s": "Anos 80",
    "90s": "Anos 90"
  };

  const filtered = products.filter((p) => {
    // search match against name and category
    const matchesSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm);

    // decade filter
    const decadeFilter = selectedDecade === "all" || p.decade === decadeMap[selectedDecade];

    // category filter (best-effort substring match)
    let categoryFilter = true;
    if (selectedCategory !== "all") {
      const cat = p.category.toLowerCase();
      if (selectedCategory === "games") categoryFilter = cat.includes("game");
      else if (selectedCategory === "audio") categoryFilter = cat.includes("áudio") || cat.includes("audio") || cat.includes("vin") || cat.includes("vinil");
      else if (selectedCategory === "photo") categoryFilter = cat.includes("foto");
      else if (selectedCategory === "collectibles") categoryFilter = cat.includes("colecion") || cat.includes("colecionavel");
    }

    return matchesSearch && decadeFilter && categoryFilter;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Catálogo Completo
          </h1>
          <p className="text-muted-foreground">
            Explore nossa coleção curada de peças vintage raras e autênticas
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border/50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-accent" />
            <h2 className="font-serif font-semibold text-foreground">Filtros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Década</label>
              <Select value={selectedDecade} onValueChange={setSelectedDecade}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as décadas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as décadas</SelectItem>
                  <SelectItem value="60s">Anos 60</SelectItem>
                  <SelectItem value="70s">Anos 70</SelectItem>
                  <SelectItem value="80s">Anos 80</SelectItem>
                  <SelectItem value="90s">Anos 90</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Categoria</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  <SelectItem value="games">Games Clássicos</SelectItem>
                  <SelectItem value="audio">Áudio & Vinis</SelectItem>
                  <SelectItem value="photo">Fotografia</SelectItem>
                  <SelectItem value="collectibles">Colecionáveis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Ordenar por</label>
              <Select defaultValue="featured">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destaques</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="newest">Mais recentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(selectedDecade !== "all" || selectedCategory !== "all") && (
            <div className="flex gap-2 mt-4">
              {selectedDecade !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedDecade("all")}>
                  {selectedDecade} ✕
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("all")}>
                  {selectedCategory} ✕
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">Nenhum produto encontrado para sua busca.</div>
          ) : (
            filtered.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Carregar Mais Produtos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
