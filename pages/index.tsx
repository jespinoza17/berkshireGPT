import { Layout, Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import { Geico } from '../components/Geico';

// update CSS to look like the Berkshire Hathaway website
function Home() {
  return (
    <Page className="flex flex-col gap-12 text-blue-900 font-serif items-center mx-px">
      <section className="flex flex-col gap-6 w-full items-center">
        <Text variant="h1" className="text-blue-900">BerkshireGPT</Text>
        <Text className="text-zinc-600 text-black">
          Chat with an AI trained on Berkshire Hathaway shareholder letters.
        </Text>
        <hr className="border" style={{borderStyle: 'inset', width: '98%'}}/>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3"> {/*fix sizing*/}
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
