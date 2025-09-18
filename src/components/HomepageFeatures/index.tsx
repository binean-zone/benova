import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const features: FeatureItem[] = [
  {
    title: 'Cloud-Native & Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nova is built on a microservices foundation, enabling dynamic scaling and
        seamless integration with both legacy and modern systems.
      </>
    ),
  },
  {
    title: 'Automated Delivery',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Streamlined deployment and delivery processes help minimize downtime and
        ensure rapid, reliable releases for your business.
      </>
    ),
  },
  {
    title: 'Flexible Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Easily connect with third-party applications and services. Nova adapts to
        your enterprise needs, supporting both current and future platforms.
      </>
    ),
  },
];

function FeatureCard({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
