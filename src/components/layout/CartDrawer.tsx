import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { formatCurrencyXAF } from '../../utils/formatters';
import { Button } from '../common/Button';
import { CartItem } from '../../types/shop';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, clearCart, totalPriceXAF, totalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', city: 'Douala' });

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setOrderSuccess(false);
    closeCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Votre Panier</h2>
                    <p className="text-xs text-slate-400">{totalItems} article{totalItems > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Fermer le panier"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {orderSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Demande enregistrée !</h3>
                    <p className="text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                      Votre réservation a bien été reçue. L'équipe Nexora237 vous contactera sur WhatsApp pour confirmer la livraison.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setOrderSuccess(false)}>
                      Continuer mes achats
                    </Button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-500 mx-auto flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-slate-400 font-medium">Votre panier est actuellement vide.</p>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Découvrez nos t-shirts, stickers et accessoires pour soutenir l'initiative technologique !
                    </p>
                  </div>
                ) : (
                  items.map((item: CartItem) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize || ''}-${item.selectedColor || ''}`}
                      className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex gap-4 items-center"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0 border border-slate-700"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">{item.product.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                          {item.selectedSize && <span>Taille: {item.selectedSize}</span>}
                          {item.selectedColor && <span>• {item.selectedColor}</span>}
                        </div>
                        <p className="text-xs font-bold text-emerald-400 mt-1">
                          {formatCurrencyXAF(item.product.priceXAF)}
                        </p>
                      </div>

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-1.5 bg-slate-900/90 rounded-lg p-1 border border-slate-700">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedSize)}
                          className="p-1 hover:text-white text-slate-400 transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-mono font-bold px-1 text-slate-200">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedSize)}
                          className="p-1 hover:text-white text-slate-400 transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id, item.selectedSize)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                        aria-label="Supprimer l'article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && !orderSuccess && (
                <div className="p-6 border-t border-slate-800 bg-slate-900/95 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Sous-total</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">
                      {formatCurrencyXAF(totalPriceXAF)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Livraison disponible sur Douala & Yaoundé (retrait gratuit lors des meetups).
                  </p>

                  <form onSubmit={handleSimulateOrder} className="space-y-3 pt-2">
                    <input
                      type="text"
                      required
                      placeholder="Nom complet"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Téléphone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="text-xs px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="text-xs px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Douala">Douala</option>
                        <option value="Yaoundé">Yaoundé</option>
                        <option value="Bafoussam">Bafoussam</option>
                        <option value="Autre / En ligne">Autre ville</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      isLoading={isCheckingOut}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Valider la commande ({formatCurrencyXAF(totalPriceXAF)})
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
