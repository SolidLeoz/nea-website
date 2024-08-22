interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  const ServiceCard = ({ title, description }: ServiceCardProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export default ServiceCard;