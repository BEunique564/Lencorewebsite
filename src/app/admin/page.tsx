"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Menu, Image, Star, FileText, Settings, Plus, Edit, Trash2 } from "lucide-react";
import { menuItems, reviews, blogPosts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type Tab = "dashboard" | "menu" | "gallery" | "reviews" | "blog" | "settings";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-section-alt flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full luxury-shadow text-center">
          <h1 className="font-playfair text-2xl font-bold mb-2">Admin Panel</h1>
          <p className="text-sm text-foreground/50 font-dm mb-6">Enter password to access</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && password === "lencore2024") {
                setIsAuthenticated(true);
              }
            }}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark focus:border-gold focus:outline-none text-sm font-dm mb-4"
          />
          <button
            onClick={() => {
              if (password === "lencore2024") setIsAuthenticated(true);
            }}
            className="w-full bg-charcoal text-white py-3 rounded-full font-dm text-sm hover:bg-gold transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "menu", label: "Menu", icon: Menu },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "blog", label: "Blog", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-section-alt">
      <div className="bg-charcoal text-white p-4 px-6 flex items-center justify-between">
        <h1 className="font-playfair text-lg font-bold tracking-[0.1em]">L&apos;ENCORE ADMIN</h1>
        <button onClick={() => setIsAuthenticated(false)} className="text-xs text-white/50 font-dm hover:text-white">
          Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-dm whitespace-nowrap transition-all ${
                activeTab === tab.id ? "bg-charcoal text-white" : "bg-white text-foreground/60 hover:bg-cream-dark"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Menu Items", value: menuItems.length, color: "text-gold" },
              { label: "Total Reviews", value: reviews.length, color: "text-green-500" },
              { label: "Blog Posts", value: blogPosts.length, color: "text-blue-500" },
              { label: "Avg Rating", value: "4.9", color: "text-purple-500" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 luxury-shadow">
                <p className="text-xs text-foreground/40 font-dm mb-1">{stat.label}</p>
                <p className={`text-3xl font-playfair font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "menu" && (
          <div className="bg-white rounded-2xl luxury-shadow overflow-hidden">
            <div className="p-4 border-b border-cream-dark flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold">Menu Items</h3>
              <button className="flex items-center gap-1 bg-gold text-white px-4 py-2 rounded-full text-xs font-dm">
                <Plus size={14} /> Add Item
              </button>
            </div>
            <div className="divide-y divide-cream-dark">
              {menuItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-cream/50">
                  <div>
                    <p className="font-dm font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-foreground/40 font-dm">{item.category} • {formatPrice(item.price)}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center hover:bg-gold/10">
                      <Edit size={14} className="text-foreground/40" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center hover:bg-red-50">
                      <Trash2 size={14} className="text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white rounded-2xl luxury-shadow overflow-hidden">
            <div className="p-4 border-b border-cream-dark">
              <h3 className="font-playfair text-lg font-semibold">Customer Reviews</h3>
            </div>
            <div className="divide-y divide-cream-dark">
              {reviews.map((review) => (
                <div key={review.id} className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                      <span className="text-xs font-dm text-gold">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-dm font-medium text-sm">{review.name}</p>
                      <p className="text-xs text-foreground/40 font-dm">{review.source} • {review.date}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={12} className="text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 font-dm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "gallery" || activeTab === "blog" || activeTab === "settings") && (
          <div className="bg-white rounded-2xl luxury-shadow p-8 text-center">
            <p className="text-foreground/40 font-dm">
              {activeTab === "gallery" && "Gallery management — Upload, organize, and delete images."}
              {activeTab === "blog" && "Blog management — Create, edit, and publish blog posts."}
              {activeTab === "settings" && "Site settings — Update business info, hours, and integrations."}
            </p>
            <p className="text-xs text-foreground/30 font-dm mt-2">Connect to a CMS (Sanity/Contentful) for full functionality.</p>
          </div>
        )}
      </div>
    </div>
  );
}
