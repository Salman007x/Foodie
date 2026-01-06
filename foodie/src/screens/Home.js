import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent' }}>
      <Navbar />
      <div className="container text-center mt-5">
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <Card 
            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
            title="Margherita Pizza"
            description="Classic Italian pizza with fresh mozzarella and basil."
            price="$14.99"
          />
          <Card 
            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
            title="Gourmet Salad"
            description="Fresh greens with seasonal vegetables and dressing."
            price="$10.99"
          />
          <Card 
            image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
            title="Cheeseburger"
            description="Juicy beef patty with melted cheese and fresh toppings."
            price="$12.99"
          />
          <Card 
            image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
            title="Fresh Fruits Bowl"
            description="A healthy mix of seasonal fresh fruits."
            price="$8.99"
          />
        </div>
        <h2 className="mt-5" style={{ color: '#ffffff', fontWeight: '700' }}>Food to Foodie!</h2>
        <p style={{ color: '#a0a0b0', fontSize: '18px' }}>
          Get started by exploring our delicious recipes.
        </p>
      </div>
      <Footer />
    </div>
  );
}
