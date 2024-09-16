import getWikiResult from "@/lib/getWikiResult"
import Item from "./components/Item";

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<searchResult> = getWikiResult(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll('%20', ' ');
    if (!data.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }
    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<searchResult> = getWikiResult(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;
    const displayTerm = searchTerm.replaceAll('%20', ' ');
    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results ? 
                Object.values(results).map(result => {
                    return <Item key={result.pageid} result={result} />

                }) : <h2 className="p-2 text-xl text-black text-center">{`${displayTerm} not found`}</h2>
            }
        </main>
    )
    return content
}