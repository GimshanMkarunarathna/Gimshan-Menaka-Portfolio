"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, ArrowRight, Mail, Phone, MessageCircle, ExternalLink, X, Send 
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// Icons
import { FaJava, FaDatabase } from 'react-icons/fa'; 
import { 
  SiFlutter, SiFirebase, SiReact, SiNodedotjs, SiFigma,
  SiJavascript, SiPython, SiMysql, SiKotlin, SiTiktok, SiCanva, SiCplusplus, SiPhp, SiMongodb
} from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const projectsData = [
  {
    title: "Fitnexa Gym App",
    img: "/Fitnexa.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "https://www.figma.com/file/your-fitnexa-research",
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-716%2C-297%2C0.14&t=wwupWAUUetlqpIQT6-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=674%3A1270&show-proto-sidebar1"
    }
  },
  {
    title: "VR Zone",
    img: "/VRZONE.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "#",
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-594%2C1310%2C0.12&t=wwupWAUUetlqpIQT6-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=225%3A797&show-proto-sidebarebar"
    }
  },
  {
    title: "Portfolio",
    img: "/Portfolio.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "#",
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-6743%2C5406%2C0.17&t=wwwwupWAUUetlqpIQT6-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1224%3A3704&show-proto-sidebar1"
    }
  },
  {
    title: "Food Menu",
    img: "/FoodMenu.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "#",
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-30841%2C13802%2C0.52&t=jEwKjnvbQMKLTEtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=522%3A861&show-proto-sidebar=1"
    }
  },
  {
    title: "Movie Ticket Booking",
    img: "/movie-ticket.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "#",
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-30841%2C13802%2C0.52&t=jEwKjnvbQMKLTEtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=138%3A2636&show-proto-sidebar=1"
    }
  },
  {
    title: "Avengers",
    img: "/Avengers.png",
    links: {
      figma: "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=864-1983&t=jEwKjnvbQMKLTEtw-1",
      research: "#", 
      prototype: "https://www.figma.com/proto/Igb1weSQTUSBkN7CqZJRGV/Untitled?node-id=0-1&p=f&viewport=-30841%2C13802%2C0.52&t=jEwKjnvbQMKLTEtw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=623%3A1035&show-proto-sidebar=1" 
    }
  }
];

export default function SinglePagePortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/gimshan-menaka-karunarathna-30a192320/";
  const githubUrl = "https://github.com/GimshanMkarunarathna";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // METHANATA OYAAGE EMAILJS KEYS DANNA
    emailjs.sendForm('service_k1acdzg', 'template_4dxxld6', formRef.current!, 'biF3Zd04W-HgXwXzH')
    .then(() => {
      alert("Message sent successfully to shang71111@gmail.com! 🔥");
      setIsModalOpen(false);
      setIsSending(false);
    }, (error) => {
      console.log(error.text);
      setIsSending(false);
    });
  };

  const floatingIcons = [
    { icon: <SiFlutter />, color: '#02569B', top: '-10%', left: '80%', delay: 0 },
    { icon: <SiFirebase />, color: '#FFCA28', top: '70%', left: '95%', delay: 1 },
    { icon: <SiReact />, color: '#61DAFB', top: '40%', left: '-15%', delay: 0.5 },
    { icon: <SiNodedotjs />, color: '#339933', top: '-5%', left: '20%', delay: 1.5 },
    { icon: <SiJavascript />, color: '#F7DF1E', top: '85%', left: '10%', delay: 2 },
    { icon: <SiPython />, color: '#3776AB', top: '15%', left: '95%', delay: 0.8 },
    { icon: <SiKotlin />, color: '#7F52FF', top: '90%', left: '60%', delay: 1.2 },
    { icon: <SiCanva />, color: '#00C4CC', top: '50%', left: '105%', delay: 2.5 },
    { icon: <SiFigma />, color: '#F24E1E', top: '80%', left: '105%', delay: 1.8 },
    { icon: <SiMysql />, color: '#4479A1', top: '95%', left: '30%', delay: 0.9 },
    { icon: <FaDatabase />, color: '#ED8B00', top: '60%', left: '-5%', delay: 0.3 },
    { icon: <SiPhp />, color: '#777BB4', top: '-10%', left: '50%', delay: 1.1 },
    { icon: <SiCplusplus />, color: '#00599C', top: '35%', left: '110%', delay: 2.1 },
  ];

  return (
    <div className="min-h-screen portfolio-bg text-white selection:bg-orange-500/30 font-sans bg-[#0a0a0a]">
      
      {/* --- NAVIGATION --- */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
          <Link href="/" className="pl-6 text-3xl font-normal text-white" style={{ fontFamily: "'Handlee', cursive" }}>Shan.</Link>
          <div className="flex items-center gap-1">
            {['home', 'about', 'projects', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} className={`nav-pill text-[10px] uppercase tracking-widest px-4 py-2 transition-all ${activeSection === id ? 'text-orange-500 font-bold bg-white/5 rounded-full' : 'text-zinc-400 hover:text-white'}`}>{id}</a>
            ))}
          </div>
          <a href="/Gimshan_CV.pdf" download className="bg-orange-600 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase hover:bg-orange-500 transition-all shadow-lg shadow-orange-900/20">Resume</a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-20 overflow-x-hidden">
        
        {/* --- HOME SECTION --- */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-20 relative overflow-visible">
          <div className="flex-1 text-left space-y-6 z-20">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-orange-500 text-5xl font-black italic uppercase tracking-tighter">Gimshan:</h2>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">UI/UX <br /> DESIGNER</h1>
              <p className="mt-6 max-w-lg text-zinc-400 text-lg">I transform complex ideas into high-performance digital products with a focus on user experience.</p>
              <div className="flex gap-4 pt-8">
                <button onClick={() => setIsModalOpen(true)} className="bg-orange-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-500 transition-all uppercase tracking-widest text-sm">
                  Hire Me <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              {floatingIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="absolute z-20 p-3 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm text-2xl md:text-3xl shadow-2xl"
                  style={{ top: tech.top, left: tech.left, color: tech.color }}
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: tech.delay }}
                >
                  {tech.icon}
                </motion.div>
              ))}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[12px] border-white/5 bg-zinc-900 shadow-2xl shadow-orange-500/10">
                <Image src="/profile.png" alt="Gimshan" fill className="object-cover object-top scale-110" priority />
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION (Now Second) --- */}
        <section id="about" className="py-24 scroll-mt-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black uppercase">ABOUT <span className="text-orange-600 italic">ME</span></h2>
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-sm shadow-2xl">
              <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                I am <span className="text-white">Gimshan Menaka Karunarathna</span>, a third-year Management Information Systems student at 
                <span className="text-orange-500"> NSBM Green University</span>
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium mt-6">
               As a dedicated UI/UX Designer and Flutter Developer, I specialize in bridging the gap between aesthetic design and functional performance. Currently, I shape user experiences as the UI/UX Designer a <span className="text-orange-500">Axstar</span>  lead design initiatives at my university's <span className="text-orange-500">Hackathon Hub</span> 
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium mt-6"> Driven by a passion for creating holistic digital products, I am actively expanding my expertise by learning the principles of Business Analysis and Product Management. My goal is to combine user insights with strategic business goals to drive meaningful product development</p>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION (Now Third) --- */}
        <section id="projects" className="py-24 text-center scroll-mt-20">
          <h2 className="text-5xl font-black mb-16 uppercase">UI/UX DESIGN <span className="text-orange-600 italic">SHOWCASE</span></h2>
          <Swiper
            modules={[Pagination, Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-16"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-zinc-900/40 p-4 rounded-[2.5rem] border border-white/10 group hover:border-orange-500/40 transition-all duration-500">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-[2rem] mb-6">
                    <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 p-6 rounded-[2rem]">
                      <div className="grid grid-cols-1 gap-4 w-full">
                        <a href={project.links.figma} target="_blank" className="w-full bg-white/10 border border-white/10 p-3 rounded-xl flex items-center justify-between text-white font-bold uppercase tracking-widest text-[10px] hover:bg-orange-600 transition">
                          Figma Project <ExternalLink size={14} />
                        </a>
                        <a href={project.links.research} target="_blank" className="w-full bg-white/10 border border-white/10 p-3 rounded-xl flex items-center justify-between text-white font-bold uppercase tracking-widest text-[10px] hover:bg-orange-600 transition">
                          User Research <ExternalLink size={14} />
                        </a>
                        <a href={project.links.prototype} target="_blank" className="w-full bg-orange-600 p-3 rounded-xl flex items-center justify-between text-white font-bold uppercase tracking-widest text-[10px] hover:bg-orange-500 transition shadow-lg shadow-orange-950/20">
                          Prototype <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-left p-4 bg-black/40 rounded-[1.5rem] border border-white/5">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Hey, let's connect!</h3>
              <h2 className="text-7xl font-black uppercase tracking-tighter leading-none">Get in <br /> <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Touch</span></h2>
              <div className="space-y-4 pt-6">
                <SocialLinkItem icon={<Mail size={20} />} title="shang71111@gmail.com" link="mailto:shang71111@gmail.com" />
                <SocialLinkItem icon={<Linkedin size={20} />} title="LinkedIn Profile" link={linkedinUrl} />
                <SocialLinkItem icon={<Phone size={20} />} title="+94 77 571 2096" link="tel:+94775712096" />
              </div>
            </div>
            
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative shadow-2xl">
              <div className="absolute -center-0 -left-70 text-[12rem] opacity-[0.1] font-black italic select-none">@</div>
              <div className="space-y-5">
                <ContactLink icon={<Mail size={18} />} title="Email" desc="shang71111@gmail.com" link="mailto:shang71111@gmail.com" />
                <ContactLink icon={<Linkedin size={18} />} title="LinkedIn" desc="Gimshan Menaka" link={linkedinUrl} />
                <ContactLink icon={<Github size={18} />} title="GitHub" desc="GimshanMkarunarathna" link={githubUrl} />
                <ContactLink icon={<SiTiktok size={18} />} title="TikTok" desc="@gimshanmkarunarathna" link="https://www.tiktok.com/@pixelcraftui?_r=1&_t=ZS-94FGID3PaTt" />
                <ContactLink icon={<MessageCircle size={18} />} title="WhatsApp" desc="94 77 571 2096" link="https://wa.me/94775712096" />
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-8 bg-orange-600 py-4 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-xl shadow-orange-950/40"
              >
                Hire Me
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* --- MODAL (Email Form) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-lg bg-zinc-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl modal-glass">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-zinc-500 hover:text-white"><X /></button>
              <h2 className="text-3xl font-black uppercase mb-2 text-center">Hire <span className="text-orange-500">Gimshan</span></h2>
              <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
                <input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition" />
                <input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition" />
                <textarea name="message" rows={4} placeholder="Your Message..." required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition resize-none"></textarea>
                <button type="submit" disabled={isSending} className="w-full bg-orange-600 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-500 transition disabled:opacity-50 shadow-xl shadow-orange-950/20">
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-12 border-t border-white/5 text-center bg-black/20 mt-20">
        <div className="flex justify-center gap-6 mb-4">
          <a href={githubUrl} target="_blank" className="text-zinc-500 hover:text-white transition"><Github size={20}/></a>
          <a href={linkedinUrl} target="_blank" className="text-zinc-500 hover:text-white transition"><Linkedin size={20}/></a>
        </div>
        <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-bold">© 2026 Gimshan Karunarathna</p>
      </footer>
    </div>
  );
}

// Reusable Components
const SocialLinkItem = ({ icon, title, link }: any) => (
  <a href={link} target="_blank" className="flex items-center gap-6 cursor-pointer group">
    <div className="p-4 rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-base text-zinc-400 group-hover:text-white transition-colors">{title}</span>
  </a>
);

const ContactLink = ({ icon, title, desc, link }: any) => (
  <a href={link} target="_blank" className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition border border-transparent hover:border-white/5 cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="text-orange-500 group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <h4 className="text-[13px] font-bold text-white leading-none">{title}</h4>
        <p className="text-[10px] text-zinc-500 mt-1">{desc}</p>
      </div>
    </div>
    <ArrowRight size={16} className="text-zinc-700 group-hover:text-orange-500 transition-colors" />
  </a>
);