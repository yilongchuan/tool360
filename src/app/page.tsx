import { tools } from '../../data/tools'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text sm:text-5xl md:text-6xl">
            Developer Tools Hub
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A collection of essential tools for developers. All in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group relative bg-secondary/50 rounded-lg overflow-hidden border border-border/50"
            >
              <div className="relative w-full h-48">
                <Image
                  src={tool.imageUrl}
                  alt={tool.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-300">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 