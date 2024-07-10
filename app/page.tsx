"use server"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


 const Component =  () =>  {
  return (
  <div className="flex justify-center items-center h-[calc(100dvh)] w-full"> 

    <Card className="max-w-xl mx-auto p-6 sm:p-8 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">名前と学籍番号を教えて！！</CardTitle>
        <CardDescription>
          大学に合宿を開催するにあたって行事届けを出したいので皆さん以下のフォームに回答して下さい！！
        </CardDescription>
      </CardHeader>
      <CardContent >
 
        <form  method="post" 
        action="https://kairi-com.form.newt.so/v1/78uNcEyke"
        > 
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label >名前</Label>
            <Input type="text" name="Full name"  placeholder="フルネームを入力して下さい" />
          </div>
          <div className="grid gap-2">
            <Label >名前（ふりがな）</Label>
            <Input type="text" name="Hiragana name"  placeholder="ふりがなを入力して下さい" />
          </div>
          <div className="grid gap-2">
            <Label >学籍番号</Label>
            <Input type="text" name="student ID number" placeholder="学籍番号を入力して下さい" />
          </div>
          </div>
  
          <div className="text-center space-y-1 mt-4">
            <h3 className=" text-lg font-medium">
            　Press here when you're done typing.
            </h3>
            <h3 className="text-lg font-medium">
              ↓
            </h3>
            <Button type="submit" className="w-full">
          送信する
        </Button>
          </div>
        </form>
      
      </CardContent>
    </Card>

 </div>
  )
}

export default Component 