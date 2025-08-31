# 🚀 Deployment Guide for Netlify

## ❌ **Why Signup Doesn't Work on Netlify**

Your current setup has a **Node.js backend** that handles signup, but **Netlify only hosts static files**. It cannot run your server.js or connect to MongoDB.

## ✅ **Solution: Deploy Backend Separately**

### **Step 1: Deploy Backend to Render (Free)**

1. **Go to [render.com](https://render.com)** and sign up
2. **Create New Web Service**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Name**: `your-app-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`

5. **Add Environment Variables:**
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=10000
   ```

6. **Deploy** and copy the URL (e.g., `https://your-app.onrender.com`)

### **Step 2: Update Frontend Configuration**

1. **Edit `config.js`:**
   ```javascript
   production: {
     apiBaseUrl: 'https://your-app.onrender.com'  // Your actual backend URL
   }
   ```

2. **Commit and push changes**

### **Step 3: Deploy Frontend to Netlify**

1. **Push to GitHub**
2. **Connect Netlify to your repo**
3. **Deploy settings:**
   - **Build command**: (leave empty - static site)
   - **Publish directory**: `.` (root)

## 🔧 **Alternative Solutions**

### **Option A: Use Netlify Functions (Limited)**
- Convert signup logic to serverless functions
- Limited MongoDB support
- More complex setup

### **Option B: Backend-as-a-Service**
- **Firebase Authentication** (Google)
- **Supabase** (Open source)
- **Appwrite** (Self-hosted)

## 🧪 **Testing Your Fix**

1. **Deploy backend to Render**
2. **Update config.js with backend URL**
3. **Deploy frontend to Netlify**
4. **Test signup functionality**

## 📁 **Files Modified**

- ✅ `config.js` - Environment configuration
- ✅ `teachersignup.html` - Updated API endpoints
- ✅ `parentsignup.html` - Updated API endpoints

## 🚨 **Important Notes**

- **Never commit API keys** to GitHub
- **Use environment variables** for sensitive data
- **Test locally** before deploying
- **Monitor backend logs** for errors

## 🆘 **Need Help?**

1. Check **Render deployment logs**
2. Verify **MongoDB connection**
3. Test **API endpoints** with Postman
4. Check **browser console** for errors
