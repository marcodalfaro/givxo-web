import Link from "next/link";

import ProgressBar from "./ProgressBar";

import {
  DemoGift,
  formatCurrency,
  getGiftProgress,
} from "@/lib/demoData";

type GiftCardProps = {
  gift: DemoGift;
};

export default function GiftCard({
  gift,
}: GiftCardProps) {
  const progress = getGiftProgress(
    gift.currentAmount,
    gift.targetAmount
  );

  return (
    <article className="giftCard">
      <div
        className="giftCardVisual"
        style={{
          backgroundImage: `url(${gift.image})`,
        }}
      >
        <span>{gift.category}</span>
      </div>

      <div className="giftCardBody">
        <h3>{gift.title}</h3>

        <p>{gift.description}</p>

        <div className="giftAmounts">
          <span>
            {formatCurrency(gift.currentAmount)}
          </span>

          <small>
            de{" "}
            {formatCurrency(gift.targetAmount)}
          </small>
        </div>

        <ProgressBar value={progress} />

        <Link
          href={`/lista-demo/regalo/${gift.id}`}
          className="giftCardLink"
        >
          Ver regalo
        </Link>
      </div>
    </article>
  );
}