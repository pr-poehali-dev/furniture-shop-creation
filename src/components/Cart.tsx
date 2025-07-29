import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Заказ оформлен! Мы свяжемся с вами в ближайшее время.');
      setIsCheckingOut(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Корзина</h2>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {items.length} товаров
            </Badge>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[50vh] p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Корзина пуста</h3>
              <p className="text-muted-foreground">Добавьте товары для оформления заказа</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-primary font-bold">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <Icon name="Minus" size={14} />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span>Доставка:</span>
                <span className="text-muted-foreground">Бесплатно</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold border-t pt-4">
                <span>Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString()} ₽</span>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  className="flex-1" 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Оформляем...
                    </>
                  ) : (
                    <>
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" onClick={onClose}>
                  Продолжить покупки
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Безопасная оплата • Доставка по всей России</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}