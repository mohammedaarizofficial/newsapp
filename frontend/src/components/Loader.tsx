import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

function Loader() {
  return (
    <Empty className="w-full flex-1 flex items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner className="h-10 w-10 text-accent"/>
        </EmptyMedia>
        <EmptyTitle>Loading your news...</EmptyTitle>
        <EmptyDescription>
          Please wait while we load your news.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export default Loader;
