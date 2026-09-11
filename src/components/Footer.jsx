export default function Footer() {
  return (
    <footer className="bg-bg-alt px-6 py-8 text-center text-sm text-muted">
        <a href="https://www.linkedin.com/in/rajithayag/" target="_blank" rel="nofollow">
            <img className="w-10 h-auto block mx-auto relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://rajithayag.github.io/rajithayag-portfolio/images/linkdin.png" alt="LinkedIn-Profile" title="LinkedIn - Rajitha Gunasekara" />
        </a>
        <p>© {new Date().getFullYear()} Rajitha Gunasekara. All rights reserved.</p>
    </footer>
  );
}