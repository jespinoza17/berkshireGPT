import { Layout, Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import { Geico } from '../components/Geico';

// update CSS to look like the Berkshire Hathaway website
function Home() {
  return (
    <Page className="flex flex-col gap-12 text-blue-900 font-serif items-center mx-px">
      <section className="flex flex-col gap-6 w-full items-center">
        <div>
          <Text variant="h1" className="text-blue-900 my-0"><a href="https://www.berkshirehathaway.com/">BerkshireGPT</a></Text>
          <div className="my-0 text-center font-bold">
            355 Farnam Street <br />
            Omaha, NE 68131 <br />
            Official Home Page
          </div>
        </div>
        <hr className="border" style={{borderStyle: 'inset', width: '98%'}}/>
      </section>

      <section className="flex flex-col gap-3">
        <Text className="text-center"variant="h2">Oracle of Omaha:</Text>
        <div className="flex self-center lg:w-2/3 text-fuchsia-800"> {/*fix sizing*/}
          <Chat />
        </div>
      </section>
      <hr className="border" style={{borderStyle: 'inset', width: '98%'}}/>
      <Geico />
      <hr className="border" style={{borderStyle: 'inset', width: '98%'}}/>
    </Page>
  )
}

Home.Layout = Layout

export default Home
