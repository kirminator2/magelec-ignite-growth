import React from 'react';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">MagElec Energy</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Революционная технология магнитной генерации для устойчивого будущего
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О компании</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Технология</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Инвесторам</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Новости</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">White Paper</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Условия использования</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Правовая информация</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                invest@magelecenergy.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MagElec Energy. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Patent №2023-ME</span>
              <span className="text-xs text-muted-foreground">ISO 14001</span>
              <span className="text-xs text-muted-foreground">CE Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;