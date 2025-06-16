// app/page.tsx
import Dropzone from "@/components/dropzone";
import FeatureCards from "@/components/ui/featurecards";

const HomePage = () => {
  return (
    <>
      {/* Decorative background blur - Top Right */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute top-28 right-[-70px] xl:right-[30px] 
          w-[220px] h-[220px] md:w-[300px] md:h-[300px] 
          rounded-full 
          bg-neutral-700/30 blur-2xl opacity-70 z-0 
          dark:bg-blue-800/30 dark:opacity-80"
        style={{ filter: "blur(60px)" }}
      />
      
      {/* Decorative background blur - Bottom Left */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-8 left-[-55px] 
          w-[170px] h-[170px] md:w-[240px] md:h-[240px] 
          rounded-full 
          bg-neutral-700/30 blur-2xl opacity-60 z-0 
          dark:bg-purple-900/30 dark:opacity-70"
        style={{ filter: "blur(50px)" }}
      />

      <main className="relative z-10 px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
            Fast & Free Conversions
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Free Unlimited File Converter
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your media files without limits. Convert images, audio, 
            and videos quickly and easily with no file size restrictions, all in 
            your browser.
          </p>
        </div>

        {/* Features Section */}
        <FeatureCards />

        {/* File Upload Section */}
        <Dropzone />
      </main>
    </>
  );
};

export default HomePage;
