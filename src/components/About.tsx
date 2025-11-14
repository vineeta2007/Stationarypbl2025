import { Heart, Sparkles, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Student-Focused',
      description: 'We design every product with teens in mind, combining style with functionality for the ultimate study experience.'
    },
    {
      icon: Sparkles,
      title: 'Quality & Style',
      description: 'Only the best materials and trendiest designs make it to our collection. Express yourself with confidence!'
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Our stationery helps you stay organized, focused, and motivated to crush your goals and ace those grades.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of students who trust StationeryHub for their creative and academic needs.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              About StationeryHub
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're not just another stationery store – we're your partner in creativity and academic success!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Students studying"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                StationeryHub was born from a simple idea: school supplies should be exciting, not boring! We believe that the right tools can transform studying from a chore into something you actually look forward to.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Started by former students who were tired of dull, uninspiring stationery, we've curated a collection that combines vibrant aesthetics with practical functionality. Whether you're bullet journaling, taking notes, or working on your next creative project, we've got you covered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of students across the country, helping them express their unique style while staying organized and motivated.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
