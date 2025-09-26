import Section from '@/components/Section';
import ResourceCard from '@/components/ResourceCard';
import { LINKS } from '@/lib/links';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            TreJay is the blockchain network.<br />
            3JAY is its native cryptocurrency.
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Fast, scarce, and sustainable — ~2-second blocks, &lt;60s finality, and fee burns that tie network usage to value. 3JAY is capped at 42,000,000 (1 3JAY = 100,000,000 jots).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={LINKS.DOCS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-slate-900 text-white text-lg font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Read the Docs
            </a>
            <a
              href={LINKS.TELEGRAM_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-slate-900 text-slate-900 text-lg font-medium hover:bg-slate-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Join the Community
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href={LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              X (@trejaynetwork)
            </a>
            <a
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              LinkedIn (TreJay)
            </a>
            <a
              href={LINKS.SECURITY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Security policy
            </a>
            <a
              href={LINKS.CONTRIBUTING}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contributing
            </a>
          </div>
        </div>
      </Section>

      {/* Credibility Band */}
      <Section className="bg-slate-50 py-12">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {['Proof of Stake', '~2s blocks', '<60s finality', 'EIP-1559 fee burns', 'DAO treasury'].map((spec) => (
              <span
                key={spec}
                className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
          <p className="text-slate-600">
            Transparent supply, on-chain vesting, and auditable genesis.
          </p>
        </div>
      </Section>

      {/* Invitation Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get involved early.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Developers</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Contribute to open repos and help shape the protocol.
            </p>
            <a
              href={LINKS.CHAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              View Chain Repo
            </a>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Validators</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Prepare to secure the network and earn staking rewards.
            </p>
            <a
              href={LINKS.DOCS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Read Documentation
            </a>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Community</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Join governance, participate in the DAO, and help steer TreJay&apos;s future.
            </p>
            <a
              href={LINKS.TELEGRAM_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </Section>

      {/* Resource Grid */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Open Resources
          </h2>
          <p className="text-xl text-slate-600">
            Everything is transparent and auditable on GitHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            title="Docs"
            description="Technical & governance documentation for the TreJay network."
            href={LINKS.DOCS}
          />
          <ResourceCard
            title="TreJay Chain"
            description="Core protocol and client implementation source code."
            href={LINKS.CHAIN}
          />
          <ResourceCard
            title="Genesis"
            description="Allocations & supply proofs for transparent token distribution."
            href={LINKS.GENESIS}
          />
          <ResourceCard
            title="Tests"
            description="Invariant & economic tests ensuring protocol reliability."
            href={LINKS.TESTS}
          />
        </div>
      </Section>
    </>
  );
}
