const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">E Kabin</h3>
            <p className="text-sm text-muted-foreground">
              Sanal giyim deneme kabini ile geleceğin alışverişi
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Hakkımızda</a>
            <a href="#" className="hover:text-primary transition-colors">İletişim</a>
            <a href="#" className="hover:text-primary transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-primary transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 E Kabin. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
