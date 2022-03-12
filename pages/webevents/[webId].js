import Layout from "../../components/Layout";
import WebCard from "../../components/WebCard";
import EventLayout from "../../components/EventLayout";
import LoadingPage from "../../components/LoadingPage";
import { getPaths, getPropData } from "../../utilities/functions";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function WebEvent() {
  const [loading, setLoading] = useState(true);
  const [props, setProps] = useState([]);
  // Router and PageName Logic
  const router = useRouter();
  const path = router.asPath.split("/").at(-1);

  useEffect(() => {
    getPropData("webevents", `${path}`).then((value) => {
      setProps(value[0]);
      setLoading(false);
    });
  }, [path]);

  useEffect(() => {
    if (props.image === undefined) return;
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {!loading ? (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Layout>
            <EventLayout price={props.price}>
              <WebCard
                desc={props.description}
                image={props.image}
                title={props.title}
                date={props.date}
                time={props.time}
                price={props.price}
              />
            </EventLayout>
          </Layout>
        </motion.div>
      ) : (
        <motion.div
          key="loadingPage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// export async function getStaticProps(context) {
//   const path = context.params.webId;
//   const props = await getPropData("webevents", `${path}`);
//   if (!props.length > 0) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     // props: DummyData[0],
//     props: props[0],
//   };
// }

// export async function getStaticPaths() {
//   // fetch pages from firebase database
//   const paths = await getPaths("webevents");
//   return {
//     paths: paths,
//     fallback: true, // false or 'blocking'
//   };
// }
