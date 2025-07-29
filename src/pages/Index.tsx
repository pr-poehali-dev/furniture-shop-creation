import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const furnitureItems = [
    {
      id: 1,
      name: "Комфортный диван",
      price: "45 000 ₽",
      originalPrice: "55 000 ₽",
      image: "/img/e5d41152-6b12-4c90-b34b-8e4666f0af12.jpg",
      category: "Мягкая мебель",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Обеденный стол",
      price: "28 000 ₽",
      originalPrice: "35 000 ₽",
      image: "/img/1f076afc-3c43-4518-8b42-5f67c8ca8c96.jpg",
      category: "Столы",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Деревянный шкаф",
      price: "32 000 ₽",
      originalPrice: "38 000 ₽",
      image: "/img/ccf50b1b-f992-4bc9-8e59-7bbd44ad4cf0.jpg",
      category: "Шкафы",
      rating: 4.7,
      reviews: 156
    }
  ];

  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим в течение 2-3 дней по всей России"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "5 лет гарантии на всю мебель"
    },
    {
      icon: "Eye",
      title: "3D-просмотр",
      description: "Рассмотрите мебель со всех сторон"
    },
    {
      icon: "CreditCard",
      title: "Рассрочка 0%",
      description: "Покупайте в рассрочку без переплат"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличное качество мебели! Диван очень удобный, доставили быстро.",
      date: "15 июля 2024"
    },
    {
      name: "Михаил Волков",
      rating: 5,
      text: "Заказывал обеденный стол - качество превзошло ожидания. Рекомендую!",
      date: "8 июля 2024"
    },
    {
      name: "Елена Смирнова",
      rating: 4,
      text: "Хороший выбор мебели, вежливые консультанты. Буду заказывать еще.",
      date: "2 июля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">МЕБЫТ ТАКИЯ</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
                <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
                <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
                <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
                <span className="ml-1">3</span>
              </Button>
              <Button className="hidden md:inline-flex">Консультация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                🎉 Скидки до 30% на весь каталог
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Современная мебель для вашего дома
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Откройте для себя коллекцию стильной и качественной мебели. 
                3D-просмотр поможет вам выбрать идеальные решения для интерьера.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть в 3D
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="ArrowDown" size={20} className="mr-2" />
                  Каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/e5d41152-6b12-4c90-b34b-8e4666f0af12.jpg" 
                alt="Современная мебель" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-sm text-muted-foreground">(1,247 отзывов)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярная мебель</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши бестселлеры с возможностью 3D-просмотра
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureItems.map((item, index) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">-18%</Badge>
                  </div>
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white">
                      <Icon name="Eye" size={16} />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="Rotate3D" size={16} className="mr-2" />
                      3D-просмотр
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-xs text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Смотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашей компании</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Уже более 15 лет мы создаем качественную мебель, которая делает ваш дом уютнее. 
                Наша миссия — предоставить каждому возможность обустроить свое пространство 
                стильно и комфортно.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">моделей мебели</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">позитивных отзывов</div>
                </div>
              </div>
              <Button size="lg">
                <Icon name="Users" size={20} className="mr-2" />
                Наша команда
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/1f076afc-3c43-4518-8b42-5f67c8ca8c96.jpg" 
                alt="О компании" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Доставка и сборка</h2>
            <p className="text-xl text-muted-foreground">Быстро и надежно по всей России</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Быстрая доставка</h3>
              <p className="text-muted-foreground mb-4">
                Доставляем мебель в течение 2-3 рабочих дней по Москве и области. 
                По России — от 3 до 7 дней.
              </p>
              <div className="text-lg font-semibold text-primary">От 1 500 ₽</div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Icon name="Wrench" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Профессиональная сборка</h3>
              <p className="text-muted-foreground mb-4">
                Наши мастера соберут мебель любой сложности. Гарантия на сборку — 2 года.
              </p>
              <div className="text-lg font-semibold text-primary">От 2 000 ₽</div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Icon name="RotateCcw" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Обмен и возврат</h3>
              <p className="text-muted-foreground mb-4">
                14 дней на обмен или возврат товара. Забираем мебель бесплатно.
              </p>
              <div className="text-lg font-semibold text-primary">Бесплатно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши покупатели</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-gray-50 border-none">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Все отзывы
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес шоу-рума</h3>
                    <p>г. Москва, ул. Тверская, д. 15, стр. 1</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p>+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>info@mebyt-takiya.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p>Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-primary"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-primary resize-none"
                ></textarea>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">МЕБЫТ ТАКИЯ</h3>
              <p className="text-gray-400 mb-4">
                Quality furniture for your perfect home
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Диваны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Столы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Шкафы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кровати</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сборка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МЕБЫТ ТАКИЯ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}