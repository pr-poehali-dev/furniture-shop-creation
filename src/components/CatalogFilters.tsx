import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  rating: number;
  sortBy: string;
}

interface CatalogFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void;
  totalProducts: number;
}

export default function CatalogFilters({ onFiltersChange, totalProducts }: CatalogFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('popular');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { id: 'sofas', name: 'Диваны', count: 45 },
    { id: 'tables', name: 'Столы', count: 32 },
    { id: 'wardrobes', name: 'Шкафы', count: 28 },
    { id: 'beds', name: 'Кровати', count: 38 },
    { id: 'chairs', name: 'Стулья', count: 56 },
    { id: 'accessories', name: 'Аксессуары', count: 24 }
  ];

  const sortOptions = [
    { value: 'popular', label: 'По популярности' },
    { value: 'price-low', label: 'Сначала дешевые' },
    { value: 'price-high', label: 'Сначала дорогие' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'newest', label: 'Новинки' }
  ];

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newCategories);
    updateFilters({ categories: newCategories });
  };

  const handlePriceChange = (min: number, max: number) => {
    const newRange: [number, number] = [min, max];
    setPriceRange(newRange);
    updateFilters({ priceRange: newRange });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    updateFilters({ rating });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateFilters({ sortBy: sort });
  };

  const updateFilters = (updates: Partial<FilterOptions>) => {
    const filters: FilterOptions = {
      categories: selectedCategories,
      priceRange,
      rating: selectedRating,
      sortBy,
      ...updates
    };
    onFiltersChange(filters);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100000]);
    setSelectedRating(0);
    setSortBy('popular');
    onFiltersChange({
      categories: [],
      priceRange: [0, 100000],
      rating: 0,
      sortBy: 'popular'
    });
  };

  const activeFiltersCount = selectedCategories.length + (selectedRating > 0 ? 1 : 0) + 
    (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <div className="flex items-center space-x-4">
          <h3 className="font-semibold">Фильтры</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">{activeFiltersCount}</Badge>
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Icon name="SlidersHorizontal" size={16} className="mr-2" />
          {isFiltersOpen ? 'Скрыть' : 'Показать'}
        </Button>
      </div>

      <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="flex-1">{category.name}</span>
                  <span className="text-sm text-muted-foreground">({category.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold mb-4">Цена</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="От"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value) || 0, priceRange[1])}
                  className="px-3 py-2 border rounded-lg text-sm"
                />
                <input
                  type="number"
                  placeholder="До"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value) || 100000)}
                  className="px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePriceChange(0, 30000)}
                >
                  До 30k
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePriceChange(30000, 60000)}
                >
                  30k-60k
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePriceChange(60000, 100000)}
                >
                  60k+
                </Button>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h4 className="font-semibold mb-4">Рейтинг</h4>
            <div className="space-y-2">
              {[5, 4, 3].map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="flex items-center space-x-1">
                    {[...Array(rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                    ))}
                    <span className="text-sm">и выше</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <h4 className="font-semibold mb-4">Сортировка</h4>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Найдено товаров: <strong>{totalProducts}</strong>
            </span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary">
                Активных фильтров: {activeFiltersCount}
              </Badge>
            )}
          </div>
          
          {activeFiltersCount > 0 && (
            <Button variant="outline" size="sm" onClick={clearAllFilters}>
              <Icon name="X" size={14} className="mr-2" />
              Сбросить все
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}