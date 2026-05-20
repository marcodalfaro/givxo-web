import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import AmountSelector from "@/components/AmountSelector";
import Button from "@/components/Button";

import {
  demoGifts,
  formatCurrency,
  getGiftProgress,
} from "@/lib/demoData";

type GiftDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GiftDetailPage({
  params,
}: GiftDetailPageProps) {
  const { id } = await params;

  const gift = demoGifts.find((item) => item.id === id);

  if (!gift) {
    return (
      <>
        <Header />

        <main className="notFoundPage">
          <h1>Regalo no encontrado</h1>
        </main>

        <Footer />
      </>
    );
  }

  const progress = getGiftProgress(
    gift.currentAmount,
    gift.targetAmount
  );

  return (
    <>
      <Header />

      <main>
        <section className="giftDetailSection">
          <div className="container">
            <div className="giftDetailGrid">
              <div
                className="giftDetailVisual"
                style={{
                  backgroundImage: `url(${gift.image})`,
                }}
              >
                <span>{gift.category}</span>
              </div>

              <div className="giftDetailContent">
                <h1>{gift.title}</h1>

                <p className="giftDetailDescription">
                  {gift.description}
                </p>

                <div className="giftDetailAmounts">
                  <strong>{formatCurrency(gift.currentAmount)}</strong>

                  <span>de {formatCurrency(gift.targetAmount)}</span>
                </div>

                <ProgressBar value={progress} />

                <AmountSelector />

                <textarea
                  placeholder="Dejá un mensaje para la pareja (opcional)"
                  className="giftMessage"
                />

                <div className="giftDetailAction">
                  <Button href="/gracias">
                    Aportar a este regalo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}