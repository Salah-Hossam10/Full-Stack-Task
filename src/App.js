import React, { useState, useMemo } from "react";
import {
  Check,
  Truck,
  Scale,
  Calendar,
  MapPin,
  Filter,
  Grid,
  List,
} from "lucide-react";

const SkipHireApp = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [filterSize, setFilterSize] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [showOnlyRoadAllowed, setShowOnlyRoadAllowed] = useState(false);

  const skipData = [
    {
      id: 17933,
      size: 4,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 278,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.813",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17934,
      size: 6,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 305,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:52.992",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17935,
      size: 8,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 375,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.171",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17936,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 400,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17937,
      size: 12,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 439,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.516",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17938,
      size: 14,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 470,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.69",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 17939,
      size: 16,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 496,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.876",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 15124,
      size: 20,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.434",
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 15125,
      size: 40,
      hire_period_days: 14,
      transport_cost: 248,
      per_tonne_cost: 248,
      price_before_vat: 992,
      vat: 20,
      postcode: "NR32",
      area: "",
      forbidden: false,
      created_at: "2025-04-03T13:51:40.344435",
      updated_at: "2025-04-07T13:16:52.603",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
  ];

  const filteredSkips = useMemo(() => {
    let filtered = skipData;

    if (filterSize !== "all") {
      const sizeRange = filterSize.split("-").map(Number);
      filtered = filtered.filter(
        (skip) => skip.size >= sizeRange[0] && skip.size <= sizeRange[1]
      );
    }

    if (showOnlyRoadAllowed) {
      filtered = filtered.filter((skip) => skip.allowed_on_road);
    }

    return filtered.sort((a, b) => a.size - b.size);
  }, [filterSize, showOnlyRoadAllowed]);

  const calculateTotalPrice = (skip) => {
    const priceWithVat = skip.price_before_vat * (1 + skip.vat / 100);
    return Math.round(priceWithVat);
  };

  const getSkipCategory = (size) => {
    if (size <= 8) return "Small";
    if (size <= 16) return "Medium";
    return "Large";
  };

  const SkipCard = ({ skip, isSelected, onClick }) => (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
        isSelected
          ? "border-emerald-500 shadow-2xl shadow-emerald-500/20"
          : "border-gray-200 hover:border-emerald-300"
      }`}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full p-2 shadow-lg">
          <Check size={20} />
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {skip.size} Yard Skip
            </h3>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium mt-2">
              {getSkipCategory(skip.size)}
            </span>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-600">
              £{calculateTotalPrice(skip)}
            </div>
            <div className="text-sm text-gray-500">inc. VAT</div>
          </div>
        </div>

        <div className="flex-1 space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
            {skip.hire_period_days} day hire period
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
            Available in {skip.postcode}
          </div>

          {skip.transport_cost && (
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="w-4 h-4 mr-2 text-emerald-500" />
              Transport: £{skip.transport_cost}
            </div>
          )}

          {skip.per_tonne_cost && (
            <div className="flex items-center text-sm text-gray-600">
              <Scale className="w-4 h-4 mr-2 text-emerald-500" />£
              {skip.per_tonne_cost} per tonne
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {skip.allowed_on_road && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Road Placement
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Heavy Waste OK
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const SkipRow = ({ skip, isSelected, onClick }) => (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg p-4 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
        isSelected
          ? "border-emerald-500 shadow-lg shadow-emerald-500/10"
          : "border-gray-200 hover:border-emerald-300"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isSelected && (
            <div className="bg-emerald-500 text-white rounded-full p-1">
              <Check size={16} />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {skip.size} Yard Skip
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {skip.hire_period_days} days
              </span>
              <span className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {skip.postcode}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {skip.allowed_on_road && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Road OK
              </span>
            )}
            {skip.allows_heavy_waste && (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                Heavy Waste
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-emerald-600">
              £{calculateTotalPrice(skip)}
            </div>
            <div className="text-xs text-gray-500">inc. VAT</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Choose Your Skip Size
              </h1>
              <p className="mt-2 text-gray-600">
                Select the perfect skip for your project in NR32
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-emerald-100 text-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-emerald-100 text-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-700">
                  Filter by size:
                </span>
              </div>
              <select
                value={filterSize}
                onChange={(e) => setFilterSize(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="all">All Sizes</option>
                <option value="4-8">Small (4-8 yards)</option>
                <option value="10-16">Medium (10-16 yards)</option>
                <option value="20-40">Large (20-40 yards)</option>
              </select>
            </div>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOnlyRoadAllowed}
                onChange={(e) => setShowOnlyRoadAllowed(e.target.checked)}
                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-gray-700">Road placement only</span>
            </label>
          </div>
        </div>

        {/* Skip Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onClick={() => setSelectedSkip(skip)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSkips.map((skip) => (
              <SkipRow
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onClick={() => setSelectedSkip(skip)}
              />
            ))}
          </div>
        )}

        {filteredSkips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No skips match your current filters
            </div>
            <button
              onClick={() => {
                setFilterSize("all");
                setShowOnlyRoadAllowed(false);
              }}
              className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Selection Summary */}
        {selectedSkip && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 sm:p-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {selectedSkip.size} Yard Skip Selected
                </h3>
                <p className="text-gray-600">
                  {selectedSkip.hire_period_days} day hire • £
                  {calculateTotalPrice(selectedSkip)} inc. VAT
                </p>
              </div>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-lg">
                Continue to Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipHireApp;
