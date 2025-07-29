---
title: "Contact Us"
meta_title: "Contact Menteeno"
description: "Contact information, address, working hours, and location of Menteeno"
image: "/images/contact-banner.jpg"
draft: false
---

<div class="contact-animation-container">
  <lottie-player src="/images/contact-animation.lottie" background="transparent" speed="1" style="width: 100%; height: 300px;" loop autoplay></lottie-player>
</div>

<div class="contact-intro-section text-center py-8">
  <h2 class="h3 mb-4">Welcome to Menteeno Family</h2>
  <p class="text-lg max-w-3xl mx-auto">
    Our team is always ready to answer your questions and listen to your suggestions. You can reach us through the contact methods below.
    <span class="block mt-2 text-red-500 font-bold">Note: In-person visits are only possible with prior appointment.</span>
  </p>
</div>

<div class="contact-info-container">
  <div class="contact-box">
    <div class="icon">
      <i class="fas fa-phone"></i>
    </div>
    <h4>Phone Number</h4>
    <p>+98 21 9103 1614</p>
    <a href="tel:+982191031614" class="btn btn-sm btn-primary">Call Us</a>
  </div>

  <div class="contact-box">
    <div class="icon">
      <i class="fas fa-envelope"></i>
    </div>
    <h4>Email</h4>
    <p>hi@menteeno.app</p>
    <a href="mailto:hi@menteeno.app" class="btn btn-sm btn-primary">Send Email</a>
  </div>

  <div class="contact-box">
    <div class="icon">
      <i class="fab fa-telegram"></i>
    </div>
    <h4>Telegram</h4>
    <p>@menteeno_support</p>
    <a href="https://t.me/menteeno_support" class="btn btn-sm btn-primary" target="_blank">Message on Telegram</a>
  </div>

  <div class="contact-box">
    <div class="icon">
      <i class="fab fa-whatsapp"></i>
    </div>
    <h4>WhatsApp</h4>
    <p>+98 21 9103 1614</p>
    <a href="https://wa.me/982191031614" class="btn btn-sm btn-primary" target="_blank">Message on WhatsApp</a>
  </div>

  <div class="contact-box">
    <div class="icon">
      <i class="fas fa-clock"></i>
    </div>
    <h4>Working Hours</h4>
    <p>Saturday to Friday: 9 AM to 6 PM</p>
    <p class="text-red-500">Closed on Mondays</p>
  </div>

  <div class="contact-box">
    <div class="icon">
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <h4>Address</h4>
    <p>Mazandaran, Babolsar, Nakhostvaziri St, Babolsar Innovation Center, Iran</p>
  </div>
</div>

<div class="map-container mt-10">
  <h3 class="text-center mb-6">Our Location</h3>
  <div class="iframe-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.735835173562!2d52.65251971531259!3d36.702294179968856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8ce55c752ea789%3A0x9567067b72a65137!2sNakhostVaziri%20St%2C%20Babolsar%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1627297301012!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</div>

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

<style>
  .contact-info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-box {
    background-color: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border-top: 5px solid #355e49;
  }
  
  .contact-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #355e49;
    background: rgba(53, 94, 73, 0.1);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .iframe-container {
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
  
  .dark .contact-box {
    background-color: #2a2d3a;
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  }
  
  .contact-intro-section {
    background: linear-gradient(rgba(53, 94, 73, 0.05), rgba(53, 94, 73, 0.1));
    border-radius: 15px;
    padding: 3rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    .contact-box {
      padding: 1.5rem;
    }
    
    .icon {
      width: 60px;
      height: 60px;
      font-size: 1.8rem;
    }
  }
</style>
  </div>
</div>

<style>
  .contact-info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-box {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .contact-box:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #355e49;
  }
  
  .iframe-container {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .dark .contact-box {
    background-color: #2a2d3a;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  }
</style>
