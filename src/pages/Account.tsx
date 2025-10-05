import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif mb-8">My Account</h1>

          <Tabs defaultValue="profile" className="max-w-2xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="profileFirstName">First Name</Label>
                    <Input id="profileFirstName" defaultValue="Jane" />
                  </div>
                  <div>
                    <Label htmlFor="profileLastName">Last Name</Label>
                    <Input id="profileLastName" defaultValue="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="profileEmail">Email</Label>
                  <Input id="profileEmail" type="email" defaultValue="jane.doe@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="profilePhone">Phone Number</Label>
                  <Input id="profilePhone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <Button variant="luxury">Save Changes</Button>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">You have no orders yet.</p>
                <Button variant="outline">Start Shopping</Button>
              </div>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6 pt-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Email Notifications</Label>
                  <div className="space-y-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Product updates and new arrivals</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Special offers and promotions</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Beauty tips and tutorials</span>
                    </label>
                  </div>
                </div>
                
                <Button variant="luxury">Save Preferences</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
