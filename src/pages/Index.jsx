import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BarChart, PieChart, DollarSign, CreditCard, Target } from "lucide-react";

const Index = () => {
  const [user] = useState({ name: "John Doe", initials: "JD" });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5 px-2">
          <a href="#" className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
            <BarChart className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            Overview
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
            <CreditCard className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            Transactions
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
            <DollarSign className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            Budgets
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
            <Target className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            Goals
          </a>
          <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
            <BarChart className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
            Reports
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-lg leading-6 font-semibold text-gray-900">Financial Dashboard</h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome back, {user.name}!</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Account Balance */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345.67</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Grocery Store - $56.78</p>
                    <p className="text-sm">Online Shopping - $123.45</p>
                    <p className="text-sm">Restaurant - $89.32</p>
                  </div>
                </CardContent>
              </Card>

              {/* Spending Categories */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Spending Categories</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full">
                    {/* Placeholder for pie chart */}
                    <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                      Pie Chart Placeholder
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Budget Overview */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Budget Overview</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full">
                    {/* Placeholder for bar chart */}
                    <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                      Bar Chart Placeholder
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Goals */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Financial Goals</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Emergency Fund</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Vacation Savings</span>
                        <span>50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{width: "50%"}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-md mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;