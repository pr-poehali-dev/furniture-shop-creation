import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [currentView, setCurrentView] = useState<'front' | 'side' | 'back' | 'top'>('front');
  const [isRotating, setIsRotating] = useState(false);

  if (!isOpen || !product) return null;

  const views = [
    { key: 'front', label: 'Спереди', rotation: 'rotateY(0deg)' },
    { key: 'side', label: 'Сбоку', rotation: 'rotateY(90deg)' },
    { key: 'back', label: 'Сзади', rotation: 'rotateY(180deg)' },
    { key: 'top', label: 'Сверху', rotation: 'rotateX(-30deg) rotateY(45deg)' }
  ];

  const handleViewChange = (view: typeof currentView) => {
    setIsRotating(true);
    setCurrentView(view);
    setTimeout(() => setIsRotating(false), 600);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
        >
          <Icon name="X" size={20} />
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* 3D View */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
              <div 
                className={`relative transition-transform duration-700 ease-in-out ${isRotating ? 'scale-95' : 'scale-100'}`}
                style={{ 
                  transform: views.find(v => v.key === currentView)?.rotation,
                  transformStyle: 'preserve-3d'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-80 h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex justify-center mt-6">
              <div className="flex bg-gray-100 rounded-full p-1">
                {views.map((view) => (
                  <button
                    key={view.key}
                    onClick={() => handleViewChange(view.key as typeof currentView)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      currentView === view.key 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Controls */}
            <div className="flex justify-center mt-4 space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="RotateCw" size={16} className="mr-2" />
                Повернуть
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ZoomIn" size={16} className="mr-2" />
                Приблизить
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{product.category}</Badge>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} отзывов)</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              <Badge className="bg-red-500 text-white">-18%</Badge>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Характеристики:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Материал:</span>
                    <span>Натуральное дерево</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Размеры:</span>
                    <span>200 x 90 x 85 см</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Вес:</span>
                    <span>45 кг</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Гарантия:</span>
                    <span>5 лет</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Описание:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Современная мебель из высококачественных материалов. 
                  Идеально подходит для создания уютного и стильного интерьера. 
                  Проверенное качество и надежность.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Share2" size={20} />
              </Button>
            </div>

            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Truck" size={16} className="text-primary" />
                <span>Доставка 2-3 дня</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Гарантия 5 лет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}